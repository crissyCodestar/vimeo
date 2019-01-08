import React from 'react';
const access_token = process.env.REACT_APP_ACCESS_TOKEN;
const url = 'https://api.vimeo.com';
const channel = 34;

const Vimeo = {
  carouselVideos(){
    return fetch(`${url}/channels/${channel}/videos?page=1&per_page=6&sort=likes`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(response => {
      return response.json()
    }).then(jsonRes => {
      if(jsonRes.data){
        console.log('RES',jsonRes.data);
        return jsonRes.data.map((videosRes) => ({
          id:videosRes.resource_key,
          title: videosRes.name,
          description: videosRes.description,
          uri: videosRes.uri,
          media: videosRes.pictures.sizes[videosRes.pictures.sizes.length -1],
          mediaTwo: videosRes.pictures.sizes[videosRes.pictures.sizes.length -2],

        }))
      }
      throw new Error('Network response failed')
    }).catch(err => {
      return `Something went wrong with your fetch: ${err.message}`
    })
  },
  mainVideos(){
    return fetch(`${url}/tags/vimeostaff/videos?page=1&per_page=5&sort=duration`,{
      method:"GET",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if(jsonResponse.data){
        return jsonResponse.data.map((videosRes) => ({
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
