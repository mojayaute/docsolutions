 const manifestForPlugIn = {
    registerType:'prompt',
    includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest:{
      name:"React-vite-app",
      short_name:"react-vite-app",
      description:"I am a simple vite app",
      icons:[{
        src: '/icon.png',
        sizes:'192x192',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src:'/icon.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src: '/icon.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/icon.png',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
    theme_color:'#171717',
    background_color:'#f0e7db',
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
    }
  }

  export default manifestForPlugIn;