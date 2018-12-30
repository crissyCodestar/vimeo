import React from 'react';
const access_token = process.env.REACT_APP_ACCESS_TOKEN
const url = 'https://api.vimeo.com'

const Vimeo = {

  carouselVideos(){
    return fetch(`${url}/channels/17/videos`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(response => {
      return response.json()
    }).then(jsonRes => {
      if(jsonRes.data){

        return jsonRes.data.map((videosRes, sizes) => ({
          id:videosRes.resource_key,
          title: videosRes.name,
          description: videosRes.description,
          uri: videosRes.uri,
          media: videosRes.pictures.sizes,
        }))
      }
      throw new Error('Network response failed')
    }).catch(err => {
      return `Something went wrong with your fetch: ${err.message}`
    })
  },
  mainVideos(){
    return fetch(`${url}/tags/vimeostaff/videos?page=1&per_page=4&sort=duration`,{
      method:"GET",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
console.log('VIMEO',jsonResponse.data);
      if(jsonResponse.data){



        return jsonResponse.data.map((videosRes, sizes) => ({
          id:videosRes.resource_key,
          title: videosRes.name,
          description: videosRes.description,
          uri: videosRes.uri,
          media: videosRes.pictures.sizes,
        }))
      }
      throw new Error('Network response failed')
    }).catch(err => {
      return `Something went wrong with your fetch: ${err.message}`
    })
  }
}

export default Vimeo;
