export default class UnsplashService {
  url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
  async getResponce() {
    const res = await fetch(this.url);
    if(!res.ok) throw new Error;
    return await res.json();
  }
  async getPhotos () {
    const res = await this.getResponce();
    return await res.map((item)=>{
      return {
        id: item.id,
        thumbUrl: item.urls.thumb,
        fullUrl: item.urls.full,
        author: item.user.name
      }
    });
  }
}
