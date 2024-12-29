class GET {
  static async getData() {
    try {
      const res = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      return await res.json();
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default GET;