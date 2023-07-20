/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */

import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';

import { customers } from './customers';

const formatMoney = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const getExchangeColor = (exchange: any) => {
    switch (exchange) {
        case 'Santander':
            return 'danger';

        case 'Itau':
            return 'success';

        case 'XP':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};

export default function AdvancedFilterDemo() {
    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData: { date: Date; }) => {
        return rowData.date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const statusBodyTemplate = (rowData: { status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
        return <Tag value={rowData.exchange} severity={getExchangeColor(rowData.exchange)} />;
    };

    const buyBodyTemplate = (rowData) => {
        return formatMoney(rowData.buy)
    };

    const sellBodyTemplate = (rowData) => {
        return formatMoney(rowData.sell)
    };

    const costBodyTemplate = (rowData) => {
        return formatMoney(rowData.cost)
    };

    const netBodyTemplate = (rowData) => {
        return formatMoney(rowData.net)
    };

    const debitOrCreditBodyTemplate = (rowData: { verified: any; }) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.debitOrCredit === 'D', 'text-red-500 pi-times-circle': !(rowData.debitOrCredit === 'D') })}></i>;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator showGridlines rows={10} dataKey="id" header={header} emptyMessage="No customers found.">
                <Column header="Data" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} />
                <Column field="exchange" header="Corretora" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} />
                <Column header="Compras" dataType="numeric" style={{ minWidth: '10rem' }} body={buyBodyTemplate}  />
                <Column header="Vendas" dataType="numeric" style={{ minWidth: '10rem' }} body={sellBodyTemplate}  />
                <Column header="Custos" dataType="numeric" style={{ minWidth: '10rem' }} body={costBodyTemplate}  />
                <Column header="Líquido" dataType="numeric" style={{ minWidth: '10rem' }} body={netBodyTemplate}  />
                <Column header="D/C" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={debitOrCreditBodyTemplate} />
            </DataTable>
        </div>
    );
}
        