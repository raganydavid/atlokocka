describe('Számítás tesztelése', () => {
    it('Teszt1: hossz: 2 lapatlo: 2.82, ', () => {
        let current = calcDiagonal(2);
        let expected = 2.82;
        expect(current).toBeCloseTo(expected, 0.9);
    });
    it('Teszt2: hossz: 2 testatlo: 3.46', () => {
        let current = calcBodyDiagonal(2);
        let expected = 3.46;
        expect(current).toBeCloseTo(expected, 0.9);
    });
});