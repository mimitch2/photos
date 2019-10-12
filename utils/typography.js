import Typography from 'typography';

const typography = new Typography({
    googleFonts: [
        {
            name: 'Oswald',
            styles: [
                '200',
            ],
        },
    ],
    baseFontSize: '16px',
    baseLineHeight: '24px',
    headerFontFamily: [
        'Oswald',
        'sans-serif',
    ],
    bodyFontFamily: ['Oswald', 'sans-serif'],
});

export default typography;
