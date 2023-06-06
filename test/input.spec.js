describe('Bemenet tesztelése', () => {
    it('Szám', () => {
        let current = checkInput(25);
        expect(current).toBe(true);
    });
    it('Betű', () => {
        let current = checkInput('cc');
        expect(current).toBe(false);
    });
    it('Negatív szám', () => {
        let current = checkInput(-1);
        expect(current).toBe(false);
    });
    
});