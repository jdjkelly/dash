## dash

![dash](https://cloud.githubusercontent.com/assets/704789/23106676/e9c67ff0-f6be-11e6-9f01-699c1bd1ffe2.png)

#### Key concepts
- Simple dashboard
- Cards are served by an API with a configurable URL at `./src/config`
- Example server at `server.js`
- API should return cards to render in the format of:
```
{ cards: [{ header: String, state: String, color: ?<"black", "green", "red", "yellow"> }] }
```
- Single code base will cross compile to iOS and Web (and soon Android)

### Core libraries
- ✅ ES6 everywhere
- ✅ [React](https://facebook.github.io/react/)
- ✅ [React Native](https://facebook.github.io/react-native/)
- ✅ [React Web Native](https://github.com/necolas/react-native-web)
- ✅ [Flow](https://flowtype.org)
