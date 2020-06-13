# Mr Roboger

  ### By Taylor Somers

## Description

  [Description of program functionality & intent presented as an elevator pitch]

## Languages & Technologies Used:

  ### Programming Languages & Libraries
  * HTML
  * JavaScript
  * jQuery
  * Markdown

  ### Operating Systems & Programs
  * Git Bash
  * Microsoft Windows 10
  * Mozilla Firefox
  * Visual Studio Code

## Installation

  1. Download a web browser, such as Apple Safari, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2. Navigate to https://github.com/taylorsomers/mr-roboger.
  3. Click the green "Clone or download" button at the right of the screen.
  4. Select "Download ZIP."
  5. Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6. Open the directory containing the extracted files.
  7. Double-click the "index.html" file to run the program through your web browser.

## Specifications

  | Program Behavior | Example Behavior | Example Output |
  |---|---|---|
  | Program displays an error when a non-number is entered. | "4", "a", "." | "4", "Please enter a whole number.", "Please enter a whole number." |
  | Program displays an error when a non-integer is entered. | "4", "4.5" | "4", "Please enter a whole number." |
  | Program displays an error when an integer less than 0 is entered. | "0", "-1" | "0", "Please enter a whole number." |
  | Program displays a count of integers from 0 up to the integer the user inputs and includes the user-inputted integer in its count. | "2" | "0,1,2" |
  | For numbers included in the program's count, if the number includes the digit 1, the program replaces that number in the count with "Beep!" | "1" | "0,Beep!" |
  | For numbers included in the program's count, if the number includes the digit 2, the program replaces that number in the count with "Boop!" | "2" | "0,Beep!,Boop!" |
  | If a number included in the program's count includes both 1 *and* 2, the program replaces that number in the count with "Boop!" (*I.e., it prioritizes "Boop!" over "Beep!") | "12" | "0,Beep!,Boop!,4,5,6,7,8,9,Beep!,Beep!,Boop!" |
  | For numbers included in the program's count, if the number includes the digit 3, the program replaces that number in the count with "Won't you be my neighbor?" | "4" | "0,Beep!,Boop!,Won't you be my neighbor?,4" |
  | If a number included in the program's count includes both 1 *and* 3, the program replaces that number in the count with "Won't you be my neighbor?" (*I.e.*, it prioritizes "Won't you be my neighbor?" over "Beep!") | "13" | "0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?" |
  | If a number included in the program's count includes both *2* and 3, the program replaces that number in the count with "Won't you be my neighbor?" (*I.e.*, it prioritizes "Won't you be my neighbor?" over both "Boop!" and "Beep!") | "23" | "0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!,Boop!,Won't you be my neighbor?" |
  | The program allows the user to enter a new number once a result has been displayed and will produce new results as many times as new input is submitted. |  |  |

## Known Bugs

  * No known bugs at this time. If any are discovered, please feel free to reach out and let me know. If you would like to contribute any fixes or improvements, please do!

### Contributors

  * Taylor Somers

### License

This website is licensed under the GNU General Public License GPLv3. (C) 2020 Taylor Somers. All rights reserved.