class POST {
  static async addData(data){
    try {
      const res = await fetch('http://itgirlschool.justmakeit.ru/api/words/add',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return await res.json();
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default POST;
