// token const
const TOKEN_EOF = 0; // end-of-file
const TOKEN_IGNORED = 1; // \t', '\n', '\v', '\f', '\r', ' '
const TOKEN_LEFT_BRACKET = 2; // [
const TOKEN_RIGHT_BRACKET = 3; // ]
const TOKEN_LEFT_BRACE = 4; // {
const TOKEN_RIGHT_BRACE = 5; // }
const TOKEN_COLON = 6; // :
const TOKEN_DOT = 7; // .
const TOKEN_COMMA = 8; // ,
const TOKEN_QUOTE = 9; // "
const TOKEN_ESCAPE_CHARACTER = 10; // \
const TOKEN_SLASH = 11; // /
const TOKEN_NEGATIVE = 12; // -
const TOKEN_NULL = 13; // null
const TOKEN_TRUE = 14; // true
const TOKEN_FALSE = 15; // false
const TOKEN_ALPHABET_LOWERCASE_A = 16; // a
const TOKEN_ALPHABET_LOWERCASE_B = 17; // b
const TOKEN_ALPHABET_LOWERCASE_C = 18; // c
const TOKEN_ALPHABET_LOWERCASE_D = 19; // d
const TOKEN_ALPHABET_LOWERCASE_E = 20; // e
const TOKEN_ALPHABET_LOWERCASE_F = 21; // f
const TOKEN_ALPHABET_LOWERCASE_L = 22; // l
const TOKEN_ALPHABET_LOWERCASE_N = 23; // n
const TOKEN_ALPHABET_LOWERCASE_R = 24; // r
const TOKEN_ALPHABET_LOWERCASE_S = 25; // s
const TOKEN_ALPHABET_LOWERCASE_T = 26; // t
const TOKEN_ALPHABET_LOWERCASE_U = 27; // u
const TOKEN_ALPHABET_UPPERCASE_A = 28; // A
const TOKEN_ALPHABET_UPPERCASE_B = 29; // B
const TOKEN_ALPHABET_UPPERCASE_C = 30; // C
const TOKEN_ALPHABET_UPPERCASE_D = 31; // D
const TOKEN_ALPHABET_UPPERCASE_E = 32; // E
const TOKEN_ALPHABET_UPPERCASE_F = 33; // F
const TOKEN_NUMBER = 34; // number
const TOKEN_NUMBER_0 = 35; // 0
const TOKEN_NUMBER_1 = 36; // 1
const TOKEN_NUMBER_2 = 37; // 2
const TOKEN_NUMBER_3 = 38; // 3
const TOKEN_NUMBER_4 = 39; // 4
const TOKEN_NUMBER_5 = 40; // 5
const TOKEN_NUMBER_6 = 41; // 6
const TOKEN_NUMBER_7 = 42; // 7
const TOKEN_NUMBER_8 = 43; // 8
const TOKEN_NUMBER_9 = 44; // 9
const TOKEN_OTHERS = 45; // anything else in json

// token symbol const
const TOKEN_LEFT_BRACKET_SYMBOL         = '['
const TOKEN_RIGHT_BRACKET_SYMBOL        = ']'
const TOKEN_LEFT_BRACE_SYMBOL           = '{'
const TOKEN_RIGHT_BRACE_SYMBOL          = '}'
const TOKEN_COLON_SYMBOL                = ':'
const TOKEN_DOT_SYMBOL                  = '.'
const TOKEN_COMMA_SYMBOL                = ','
const TOKEN_QUOTE_SYMBOL                = '"'
const TOKEN_ESCAPE_CHARACTER_SYMBOL     = '\\'
const TOKEN_SLASH_SYMBOL                = '/'
const TOKEN_NEGATIVE_SYMBOL             = '-'
const TOKEN_ALPHABET_LOWERCASE_A_SYMBOL = 'a'
const TOKEN_ALPHABET_LOWERCASE_B_SYMBOL = 'b'
const TOKEN_ALPHABET_LOWERCASE_C_SYMBOL = 'c'
const TOKEN_ALPHABET_LOWERCASE_D_SYMBOL = 'd'
const TOKEN_ALPHABET_LOWERCASE_E_SYMBOL = 'e'
const TOKEN_ALPHABET_LOWERCASE_F_SYMBOL = 'f'
const TOKEN_ALPHABET_LOWERCASE_L_SYMBOL = 'l'
const TOKEN_ALPHABET_LOWERCASE_N_SYMBOL = 'n'
const TOKEN_ALPHABET_LOWERCASE_R_SYMBOL = 'r'
const TOKEN_ALPHABET_LOWERCASE_S_SYMBOL = 's'
const TOKEN_ALPHABET_LOWERCASE_T_SYMBOL = 't'
const TOKEN_ALPHABET_LOWERCASE_U_SYMBOL = 'u'
const TOKEN_ALPHABET_UPPERCASE_A_SYMBOL = 'A'
const TOKEN_ALPHABET_UPPERCASE_B_SYMBOL = 'B'
const TOKEN_ALPHABET_UPPERCASE_C_SYMBOL = 'C'
const TOKEN_ALPHABET_UPPERCASE_D_SYMBOL = 'D'
const TOKEN_ALPHABET_UPPERCASE_E_SYMBOL = 'E'
const TOKEN_ALPHABET_UPPERCASE_F_SYMBOL = 'F'
const TOKEN_NUMBER_0_SYMBOL             = '0'
const TOKEN_NUMBER_1_SYMBOL             = '1'
const TOKEN_NUMBER_2_SYMBOL             = '2'
const TOKEN_NUMBER_3_SYMBOL             = '3'
const TOKEN_NUMBER_4_SYMBOL             = '4'
const TOKEN_NUMBER_5_SYMBOL             = '5'
const TOKEN_NUMBER_6_SYMBOL             = '6'
const TOKEN_NUMBER_7_SYMBOL             = '7'
const TOKEN_NUMBER_8_SYMBOL             = '8'
const TOKEN_NUMBER_9_SYMBOL             = '9'

// token symbol const
const TOKEN_SYMBOLS = {
  TOKEN_EOF: "EOF",
  TOKEN_LEFT_BRACKET: "[",
  TOKEN_RIGHT_BRACKET: "]",
  TOKEN_LEFT_BRACE: "{",
  TOKEN_RIGHT_BRACE: "}",
  TOKEN_COLON: ":",
  TOKEN_DOT: ".",
  TOKEN_COMMA: ",",
  TOKEN_QUOTE: "\"",
  TOKEN_ESCAPE_CHARACTER: "\\",
  TOKEN_SLASH: "/",
  TOKEN_NEGATIVE: "-",
  TOKEN_NULL: "null",
  TOKEN_TRUE: "true",
  TOKEN_FALSE: "false",
  TOKEN_ALPHABET_LOWERCASE_A: "a",
  TOKEN_ALPHABET_LOWERCASE_B: "b",
  TOKEN_ALPHABET_LOWERCASE_C: "c",
  TOKEN_ALPHABET_LOWERCASE_D: "d",
  TOKEN_ALPHABET_LOWERCASE_E: "e",
  TOKEN_ALPHABET_LOWERCASE_F: "f",
  TOKEN_ALPHABET_LOWERCASE_L: "l",
  TOKEN_ALPHABET_LOWERCASE_N: "n",
  TOKEN_ALPHABET_LOWERCASE_R: "r",
  TOKEN_ALPHABET_LOWERCASE_S: "s",
  TOKEN_ALPHABET_LOWERCASE_T: "t",
  TOKEN_ALPHABET_LOWERCASE_U: "u",
  TOKEN_ALPHABET_UPPERCASE_A: "A",
  TOKEN_ALPHABET_UPPERCASE_B: "B",
  TOKEN_ALPHABET_UPPERCASE_C: "C",
  TOKEN_ALPHABET_UPPERCASE_D: "D",
  TOKEN_ALPHABET_UPPERCASE_E: "E",
  TOKEN_ALPHABET_UPPERCASE_F: "F",
  TOKEN_NUMBER_0: "0",
  TOKEN_NUMBER_1: "1",
  TOKEN_NUMBER_2: "2",
  TOKEN_NUMBER_3: "3",
  TOKEN_NUMBER_4: "4",
  TOKEN_NUMBER_5: "5",
  TOKEN_NUMBER_6: "6",
  TOKEN_NUMBER_7: "7",
  TOKEN_NUMBER_8: "8",
  TOKEN_NUMBER_9: "9"
};