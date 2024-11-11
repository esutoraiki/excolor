# exColor

`exColor` is a package that allows you to easily apply text colors, background colors, and effects in your terminal. With this package, you can customize your messages to make your terminal output more visually appealing and readable.

## Requirements

| **Technology** | **Version**      |
| -------------- | ---------------- |
| Node           | 16.7.0 or higher |
| NPM            | 10.8.2           |

## Installation

1. Open a terminal at the root of your project

2. Execute
   
   ```bash
   npm i excolor
   ```

## Usage

To use `exColor` with ES6 syntax, you can do so as follows:

```js
import logs from "excolor";
logs("%[yellow] Hello world of color ");
```

You can combine different color and effect operators in a single `exColor` string by separating them with the `|` character. This feature allows you to apply multiple styles simultaneously, creating custom text combinations.

In the example:

```js
import logs from "excolor";
logs("%[yellowBright|bgRed|blink] Hello world of color ");
```

The following operators are combined:

- **`yellowBright`**: Applies a bright yellow text color.
- **`bgRed`**: Sets a red background.
- **`blink`**: Makes the text blink.

This combination creates text with bright yellow color on a red background that blinks. You can mix any number of color operators (foreground and background) and effects (like `bold`, `italic`, `underline`, etc.) to achieve the desired style.

This flexibility allows you to create complex and styled text outputs in the terminal.

## Key Features

### Text Colors (foreground color)

You can apply basic colors and their bright variants. Examples:

- **Basic Colors**: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`.

- **Bright Colors**: `blackBright`, `redBright`, `greenBright`, `yellowBright`, `blueBright`, `magentaBright`, `cyanBright`, `whiteBright`.

```js
import logs from "excolor";
logs("%[red]This text is red");
logs("%[greenBright]This text is bright green");
```

### Background Colors

Set background colors for your text:

- **Basic Backgrounds**: `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`.

- **Bright Backgrounds**: `bgBlackBright`, `bgRedBright`, `bgGreenBright`, `bgYellowBright`, `bgBlueBright`, `bgMagentaBright`, `bgCyanBright`, `bgWhiteBright`.

```js
import logs from "excolor";
logs("%[bgBlue]This text has a blue background");
logs("%[bgRedBright]This text has a bright red background");
```

### Text Effects

`exColor` allows you to add effects like:

- **Bold**: `bold`
- **Dim**: `dim`
- **Italic**: `italic`
- **Underline**: `underline`
- **Blink**: `blink`
- **Invert** (swaps text and background): `invert`
- **Hide**: `hide`
- **Strikethrough**: `strike`

```js
import logs from "excolor";
logs("%[bold]This text is bold");
logs("%[underline|red]This text is underlined and red");
logs("%[blink]This text will blink");
```

### 256-Color Mode

In 256-color mode, you can use ANSI's 256-color palette, which provides a wide range of color options for both text and background. This palette includes:

- **16 basic colors** (from 0 to 15)
- **216 colors** in various shades created by combining RGB values (from 16 to 231)
- **24 grayscale colors** (from 232 to 255)

You can set the text color using `fg256(number)` and the background color using `bg256(number)`. 

```js
import logs from "excolor";
logs("%[fg256(82)]This is a custom 256 color text");
logs("%[bg256(124)]This text has a custom 256 color background");
```

### Reset Operators

`exColor` provides specific operators to reset text color, background color, and effects to the terminal’s default settings. These operators allow you to clear any styling and return to the terminal’s original look.

#### Reset Operators

- **`!bg` or `!background`**:
  
  - Resets the **background color** to the terminal's default.
  - Usage: `%[!bg]` or `%[!background]`

- **`!fg` or `!color`**:
  
  - Resets the **text color** to the terminal's default.
  - Usage: `%[!fg]` or `%[!color]`

- **`normal`, `reset`, or `""` (empty string)**:
  
  - Resets **all styles, colors, and effects** to the terminal's default settings.
  - Usage: `%[normal]`, `%[reset]`, or simply `%[]`

#### Examples

```js
// Text with a red background and white text, then reset to the default background
logs("%[white|bgRed]Important Message%[!bg] now with default background");

// Text with bold effect and green color, then reset text color
logs("%[green|bold]Green Bold Text%[!fg] default text color");

// Text with underline and blue color, then reset all styles
logs("%[blue|underline]Underlined Text%[reset] default text and style");
```

These reset operators allow for fine control over styling, making it easy to return to default colors or clear specific effects without affecting the rest of the terminal's styling.

#### Example:

```js
import logs from "excolor";
logs("%[fg256(82)]This is a custom 256 color text");
logs("%[bg256(124)]This text has a custom 256 color background");
```

Each color code can be referenced directly in `exColor` to customize your terminal output precisely as you desire.

You can use ANSI's 256-color palette. Use `fg256(number)` for text and `bg256(number)` for background.

### RGB and Hexadecimal Colors

For more customization, you can specify colors in RGB and Hexadecimal formats.

- **RGB**: `rgb(r,g,b)` for text and `bgRgb(r,g,b)` for background.**RGB**: `rgb(r,g,b)` for text and `bgRgb(r,g,b)` for background.
  
  The **RGB** format allows you to specify colors by setting values for **Red (R)**, **Green (G)**, and **Blue (B)**. Each of these components can take an integer value between 0 and 255, where:
  
  - `r` (Red) represents the intensity of the red component.
  - `g` (Green) represents the intensity of the green component.
  - `b` (Blue) represents the intensity of the blue component.
  
  For example, `rgb(255,0,0)` produces a bright red color (maximum intensity of red and no green or blue), while `rgb(0,255,0)` produces a bright green.
  
  #### Example:
  
  ```js
  import logs from "excolor";
  logs("%[rgb(255,151,0)]This text is colored rgb(255,151,0)");
  logs("%[bgRgb(69,42,4)|white]This text has a background color in RGB");
  ```

- **Hexadecimal**: `hex(#RRGGBB)` for text and `bgHex(#RRGGBB)` for background.
  
  The **Hexadecimal** format represents colors using a six-digit hexadecimal code, where each pair of digits corresponds to one of the RGB components:
  
  - `RR` is the hexadecimal value for the red component.
  - `GG` is the hexadecimal value for the green component.
  - `BB` is the hexadecimal value for the blue component.
  
  Each pair can range from `00` (0 in decimal) to `FF` (255 in decimal), allowing for 256 possible values per color channel. For example, `#FF5733` represents a eddish-orange color, where `FF` is the maximum red, `57` is a moderate amount of green, and `33` is a small amount of blue.

```js
import logs from "excolor";
logs("%[hex(#1F44A7)]This text is colored hex(#1F44A7)");
logs("%[bgHex(#7A0000)|hex(#ee3)]background color with text color in hex");
```

## Example in `example.js`

The `example.js` file included in the project provides detailed examples of all these features. Run this file to see the colors and effects in action and verify the functionality of the package.

If you want to run the excolor example script, use the following command:

```bash
npm explore excolor -- npm run example
```
