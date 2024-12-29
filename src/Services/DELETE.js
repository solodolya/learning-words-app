class DELETE {
  static async deleteData(id){
    try {
      const res = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,{
        method: 'POST'
      });
      return await res.json();
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default DELETE;