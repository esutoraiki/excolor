const logs = (message, type = "log") => {
    const
        r = "\x1b[0m", // reset
        s = "\x1b[", // start
        f = "m", // end
        fg = [ "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white" ],
        fgb = [ "blackBright", "redBright", "greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright" ],

        bg = [ "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgBlue", "bgMagenta", "bgCyan", "bgWhite" ],
        bgb = [ "bgBlackBright", "bgRedBright", "bgGreenBright", "bgYellowBright", "bgBlueBright", "bgMagentaBright", "bgCyanBright", "bgWhiteBright" ],

        e = [ "bold", "dim", "italic", "underline", "blink", "invert", "hide", "strike" ],
        en = [ "!bold", "!dim", "!italic", "!underline", "!blink", "!invert", "!hide", "!strike" ]
    ;

    function get_value_expresion(input, elements, type = 0) {
        let
            value = input.trim(),
            i = elements.findIndex(index => index === value),
            result = 0
        ;

        switch (type) {
            case 0:
                result = (i >= 0) ? i + 30 : null;
                break;
            case 1:
                result = (i >= 0) ? i + 40 : null;
                break;
            case 2:
                result = (i >= 0) ? i + 90 : null;
                break;
            case 3:
                result = (i >= 0) ? i + 100 : null;
                break;
            case 4:
                result = (i > 4) ? i + 2 : i + 1;
                if (result === 0) {
                    result = null;
                }
                break;
            case 5:
                result = (i > 4) ? i + 22 : i + 21;
                if (result === 0) {
                    result = null;
                }
                break;
        }

        return result;
    }

    function sequence(value) {
        let
            serie = [],
            sequence = [],
            x256 = null
        ;

        const
            params = value[0].split("|")
        ;

        for (let item of params) {
            const
                fg256Pattern = /^fg256\((\d{1,3})\)$/,
                fg256match = item.match(fg256Pattern),

                bg256Pattern = /^bg256\((\d{1,3})\)$/,
                bg256match = item.match(bg256Pattern)
            ;

            if (fg256match) {
                x256 = parseInt(fg256match[1], 10);

                if ((x256 >= 0 && x256 <= 255)) {
                    item = "fg256";
                }
            }

            if (bg256match) {
                x256 = parseInt(bg256match[1], 10);

                if ((x256 >= 0 && x256 <= 255)) {
                    item = "bg256";
                }
            }

            switch (item) {
                case "normal":
                case "reset":
                case "":
                    serie.push(0);
                    break;
                case "gray":
                case "grey":
                    serie.push(90);
                    break;
                case "bgGray":
                case "bgGrey":
                    serie.push(100);
                    break;
                case "!bg":
                case "!background":
                    serie.push(49);
                    break;
                case "!fg":
                case "!color":
                    serie.push(39);
                    break;
                case "fg256":
                    serie.push(`38;5;${x256}`);
                    break;
                case "bg256":
                    serie.push(`48;5;${x256}`);
                    break;
                default:
                    serie.push(get_value_expresion(item, fg)); // Color
                    serie.push(get_value_expresion(item, fgb, 2)); // Color Bright
                    serie.push(get_value_expresion(item, bg, 1)); // Background
                    serie.push(get_value_expresion(item, bgb, 3)); // Background Bright
                    serie.push(get_value_expresion(item, e, 4)); // Effects
                    serie.push(get_value_expresion(item, en, 5)); // No effects
                    break;
            }
        }

        sequence = serie.filter(ele => ele !== null);
        return s + sequence.join(";") + f;
    }

    function handleMessage() {
        console.log(message);
    }

    function init() {
        let
            code_temp = [],
            code_ent = String(message).split("%[")
        ;

        code_temp.push(code_ent[0]);

        for (let i = 1; i < code_ent.length; i++) {
            let
                code_ent_2 = code_ent[i].split("]")
            ;

            code_temp.push(sequence(code_ent_2));

            for (let j = 1; j < code_ent_2.length; j++) {
                code_temp.push(code_ent_2[j]);
            }
        }

        if (typeof message === "object") {
            console.log("Press Enter to see more info (available for 5 seconds)");
            process.stdin.once("data", handleMessage);

            setTimeout(() => {
                process.stdin.removeListener("data", handleMessage);
            }, 5000);
        }

        return code_temp.join("");
    }

    console[type](init() + r);
};

module.exports = logs;
