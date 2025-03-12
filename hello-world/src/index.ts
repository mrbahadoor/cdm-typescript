function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2024)
        return income * 1.2;
    else
        return income * 1.3;
}