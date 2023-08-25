export const parseBuySellToSymbol = (input: 'BUY' | 'SELL') => {
    if (input === 'BUY') return 'C'
    return 'V'
}