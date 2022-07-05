const { encrypt, decrypt } = require("./index");

var s = ["abc", "Orange", "qwerty asdsa asdf", "asadfdd", "eqwr"];

var i = 0;
while (i != 5) {
    let temp1 = s[i];

    test("encrypt test", () => {
        expect(encrypt(temp1)).not.toEqual(temp1);
    });

    test("decrypt test", () => {
        expect(decrypt(encrypt(temp1))).toEqual(temp1);
    });

    i += 1;
}