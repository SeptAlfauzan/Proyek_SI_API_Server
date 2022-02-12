const crypto = require('crypto');

class Auth {
  constructor() {
    this.algorithm = 'aes256';
    this.key = 'password';
    this.password = 'helloworld';
  }

  encrypt = (plaintext) => {
    const cipher = crypto.createCipher(this.algorithm, this.key);
    const encrypted = cipher.update(plaintext, 'utf8', 'hex') + cipher.final('hex');

    return encrypted;
  }

  decrypt = (password) => {
    const decipher = crypto.createDecipher(this.algorithm, this.key);
    const decrypted = decipher.update(password, 'hex', 'utf8') + decipher.final('utf8');

    return decrypted;
  }
}

module.exports = Auth;
