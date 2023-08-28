import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {useEffect, useState} from "react";
import useBrokerageNoteService from "../../service/useBrokerageService.ts";
import {TBrokerageOrder} from "../../hooks/useBrokerageNoteForm.ts";
import {Box, Divider, Grid, Typography} from '@mui/material';
import Orders from "./Orders.tsx";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";

type TProps = {
    brokerageNoteId: number | null
    open: boolean
    handleClose: () => void
    handleOpenModal: (id: number) => void
}

const ItemValue = ({item, value}: {item: string, value: string | number | undefined}) => {
    return (<Box sx={{display: 'flex', mr: 5}}>
        <Typography sx={{mr: 1, fontWeight: 'bold'}}>{item}:</Typography>
        <Typography>{value}</Typography>
    </Box>)
}

const SectionHeader = ({title}: {title: string}) => {
    return (
        <>
            <Typography sx={{ml: 5, fontWeight: 'bold'}}>{title}</Typography>
            <Divider sx={{mx: 5}}/>
        </>
    )
}
export default function BrokerageNoteModal({brokerageNoteId, open, handleClose, handleOpenModal}: TProps) {
    const navigate = useNavigate()
    const { getById } = useBrokerageNoteService()
    const [brokerageNote, setBrokerageNote] = useState<TBrokerageOrder | null>(null)

    useEffect(() => {
        (async () => {
            if(brokerageNoteId !== null) {
                const result = await getById(brokerageNoteId)
                setBrokerageNote(result.data)
            }
        })()

    }, [brokerageNoteId])

    const handleDelete = () => {
        if(!brokerageNoteId) throw new Error('There is not brokerage note id');
        handleOpenModal(brokerageNoteId)
    }

    const handleEdit = () => {
        navigate('/brokeragenotes/form', {state: {...brokerageNote}})
    }

    return (
        <React.Fragment>
            <Dialog
                fullWidth={true}
                maxWidth={'xl'}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Nota de corretagem</DialogTitle>
                <Box sx={{display: 'flex', justifyContent: 'center', mb: 1}}>
                    <Button onClick={handleDelete} size='small' color='error' variant='outlined' startIcon={<DeleteIcon />} sx={{mr: 2}}>
                        Deletar
                    </Button>
                    <Button onClick={handleEdit} size='small' color='info' variant='outlined' startIcon={<EditIcon />}>
                        Editar
                    </Button>
                </Box>
                <Box>
                    <Box sx={{width: '100%'}}>
                        <SectionHeader title='Informações Gerais' />
                        <Box sx={{display: 'flex', justifyContent: 'flex-start', width: '100%', pl: 5, mt: 2}}>
                            <ItemValue item='Número da nota' value={brokerageNote?.generalInformation.brokerageOrderNumber} />
                            <ItemValue item='Data pregão' value={'2010-01-20'} />
                            <ItemValue item='Cliente' value={brokerageNote?.generalInformation.clientId} />
                        </Box>
                    </Box>
                    <Box sx={{width: '100%', mt: 3}}>
                        <SectionHeader title='Ordens' />
                        <Box sx={{mr: 5}}>
                            <Orders orders={brokerageNote?.orders || []} />
                        </Box>
                    </Box>
                    <Box sx={{width: '100%', mt: 3}}>
                        <Grid container sx={{mt: 2}}>
                            <Grid item>
                                <SectionHeader title='Resumo dos negócios' />
                                <Box sx={{ml: 5, mt: 2}}>
                                    <ItemValue item='Debêntures' value={brokerageNote?.businessSummary.debentures} />
                                    <ItemValue item='Vendas à vista' value={brokerageNote?.businessSummary.sellInCash} />
                                    <ItemValue item='Compras à vista' value={brokerageNote?.businessSummary.buyInCash} />
                                    <ItemValue item='Opções - compras' value={brokerageNote?.businessSummary.optionsBuy} />
                                    <ItemValue item='Opções - vendas' value={brokerageNote?.businessSummary.optionsSell} />
                                    <ItemValue item='Operações à termo' value={brokerageNote?.businessSummary.termOptions} />
                                    <ItemValue item='Valor títulos públicos' value={brokerageNote?.businessSummary.federalSecurities} />
                                    <ItemValue item='Valor das operações' value={brokerageNote?.businessSummary.operationValues} />
                                </Box>
                            </Grid>
                            <Grid item>
                                <SectionHeader title='Clearing' />
                                <Box sx={{ml: 5, mt: 2}}>
                                    <ItemValue item='Valor líquido das operações' value={brokerageNote?.financialSummary.clearing.operationsNetValue} />
                                    <ItemValue item='Taxa de liquídação' value={brokerageNote?.financialSummary.clearing.settlementFee} />
                                    <ItemValue item='Taxa de registro' value={brokerageNote?.financialSummary.clearing.registryFee} />
                                    <ItemValue item='Total CBLC' value={brokerageNote?.financialSummary.clearing.totalCblc} />
                                </Box>
                            </Grid>
                            <Grid item>
                                <SectionHeader title='Bolsa' />
                                <Box sx={{ml: 5, mt: 2}}>
                                    <ItemValue item='Taxa de termo/opções' value={brokerageNote?.financialSummary.exchange.termOrOptionsFee} />
                                    <ItemValue item='Taxa A.N.A' value={brokerageNote?.financialSummary.exchange.anaFee} />
                                    <ItemValue item='Emolumentos' value={brokerageNote?.financialSummary.exchange.fees} />
                                    <ItemValue item='Total Bovespa | Soma' value={brokerageNote?.financialSummary.exchange.total} />
                                </Box>
                            </Grid>
                            <Grid item>
                                <SectionHeader title='Custos operacionais' />
                                <Box sx={{ml: 5, mt: 2}}>
                                    <ItemValue item='Taxa operacional' value={brokerageNote?.financialSummary.operationalCosts.operationalFee} />
                                    <ItemValue item='Execução' value={brokerageNote?.financialSummary.operationalCosts.execution} />
                                    <ItemValue item='Taxa de custódia' value={brokerageNote?.financialSummary.operationalCosts.custody} />
                                    <ItemValue item='Impostos' value={brokerageNote?.financialSummary.operationalCosts.taxes} />
                                    <ItemValue item='IRRF' value={brokerageNote?.financialSummary.operationalCosts.irrf} />
                                    <ItemValue item='Outros' value={brokerageNote?.financialSummary.operationalCosts.others} />
                                    <ItemValue item='Total' value={brokerageNote?.financialSummary.operationalCosts.totalCosts} />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{width: '100%', mt: 3}}>
                            <SectionHeader title='Informações Finais' />
                            <Box sx={{display: 'flex', justifyContent: 'flex-start', width: '100%', pl: 5, mt: 2}}>
                                {/*<ItemValue item='Líquido para' value={brokerageNote?.financialSummary.netDate} />*/}
                                <ItemValue item='Líquido para' value='data' />
                                <ItemValue item='Total líquido' value={brokerageNote?.financialSummary.netTotalValue} />
                                <ItemValue item='D/C' value={brokerageNote?.financialSummary.netDebitOrCredit.charAt(0)} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}