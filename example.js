"use strict";

const
    logs = require("./index.js")
;

logs("Reset");
logs("----------");
logs("%[red]Text in color %[invert|bgYellowBright]red%[normal] For all attributes off, writing normal or nothing");

logs("\nColors");
logs("----------");
logs("%[black]black");
logs("%[red]red");
logs("%[green]green");
logs("%[yellow]yellow");
logs("%[blue]blue");
logs("%[magenta]magenta");
logs("%[cyan]cyan");
logs("%[white]white");
logs("%[blackBright]blackBright");
logs("%[gray]gray (alias of blackBright)");
logs("%[grey]grey (alias of blackBright)");
logs("%[redBright]redBright");
logs("%[greenBright]greenBright");
logs("%[yellowBright]yellowBright");
logs("%[blueBright]blueBright");
logs("%[magentaBright]magentaBright");
logs("%[cyanBright]cyanBright");
logs("%[whiteBright]whiteBright");

logs("\nBackgrounds");
logs("----------");
logs("%[bgBlack]bgBlack");
logs("%[bgRed]bgRed");
logs("%[bgGreen]bgGreen");
logs("%[bgYellow]bgYellow");
logs("%[bgBlue]bgBlue");
logs("%[bgMagenta]bgMagenta");
logs("%[bgCyan]bgCyan");
logs("%[bgWhite]bgWhite");
logs("%[bgBlackBright]bgBlackBright");
logs("%[bgGray]bgGray (alias of bgBlackBright)");
logs("%[bgGrey]bgGrey (alias of bgBlackBright)");
logs("%[bgRedBright]bgRedBright");
logs("%[bgGreenBright]bgGreenBright");
logs("%[bgYellowBright]bgYellowBright");
logs("%[bgBlueBright]bgBlueBright");
logs("%[bgMagentaBright]bgMagentaBright");
logs("%[bgCyanBright]bgCyanBright");
logs("%[bgWhiteBright]bgWhiteBright");


logs("\nExample Colors");
logs("----------");
logs("%[red]Color red");
logs("Default color");
logs("Default color %[red]color red");
logs("%[blue]color blue, %[red]color red");
logs("Default color, %[red]color red, %[blue]color blue");
logs("%[red|bgYellowBright]Color red background yellow bright");
logs("%[black|bgGreen]Color black, Background green bright");
logs("Default color, %[red|bgYellowBright]background yellow bright color red, %[bgBlue|white]background blue color white");
logs("%[blue|strike]Este texto completo estara en azul");

logs("%[red]Hello %[bgBlue|underline]world%[|red|italic] of colors!");
logs("%[red]Hello %[bgBlue|underline]world%[!bg|!underline|italic] of colors!");

logs("%[greenBright]Hello %[bgBlue|underline]world%[|bgBlue|italic] of colors!");
logs("%[greenBright]Hello %[bgBlue|underline]world%[!color|!underline|italic] of colors!");

logs(`
   CPU: %[red|blink]'98%'
   %[]RAM: %[green]'20%'
   %[]DISK: %[yellowBright|bold]'50%'
`);

logs("\nEffects");
logs("----------");
logs("%[bold]bold");
logs("%[dim]dim");
logs("%[italic]italic");
logs("%[underline]underline");
logs("%[blink]blink");
logs("%[invert]invert");
logs("%[hide]hide");
logs("%[strike]strike");

logs("\n256 color mode table");
logs("----------");


const color = ["white", "black"];
let x = 0, c = color[0], count = 1;

for (let i = 0; i <= 255; i++) {
    if ((i >= 0 && i <= 6) || (i >= 232 && i <= 243)) c = color[0];
    if (i >= 7 && i <= 15 || (i >= 244 && i <= 255)) c = color[1];

    if (i >= 16 && i <= 231) {
        c = (count <= 18) ? color[0] : color[1];
        count = (count === 36) ? 1 : count + 1;
    }

    logs(`%[fg256(${i})]Color ${i} %[${c}|bg256(${i})]Background ${i}`);
}

logs("\nTrue color");
logs("----------");
logs("%[rgb(255,151,0)]This line of text is colored rgb(255,151,0)");
logs("%[bgRgb(69,42,4)|white]This line of text has a background color of fgRgb(69,42,4)");
