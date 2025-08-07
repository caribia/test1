class HoroscopeExtension {
  getInfo() {
    return {
      id: 'horoscope',
      name: '占い',
      blocks: [
        {
          opcode: 'getFortune',
          blockType: Scratch.BlockType.REPORTER,
          text: '今日の運勢（星座: [sign]）',
          arguments: {
            sign: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'aries'
            }
          }
        }
      ]
    };
  }

  async getFortune(args) {
    const response = await fetch(`https://aztro.sameerkumar.website/?sign=${args.sign}&day=today`, {
      method: 'POST'
    });
    const data = await response.json();
    return data.description;
  }
}

Scratch.extensions.register(new HoroscopeExtension());

