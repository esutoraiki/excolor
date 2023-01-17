"use strict";

const
    logs = require("./excolor.js")
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
