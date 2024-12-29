class UPDATE {
  static async updateData(id, data){
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}`,{
        method: 'PUT',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({data})
      });
      return await res.json();
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default UPDATE;