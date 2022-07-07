import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liked: [],
    products: [{
        id: 1,
        name: "iPhone X",
        image: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-space-gray.png",
        description: "The best phone ever",
        is_liked: false,
      },
      {
        id: 2,
        name: "iPhone XS",
        image: "https://shop.ee.co.uk/medias/iphone-12-5g-64gb-purple-desktop-detail-1-Format-488?context=bWFzdGVyfHJvb3R8MTQ5MDIyfGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaGNhL2hlYi85NjQ2MDQ0OTM4MjcwL2lwaG9uZS0xMi01Zy02NGdiLXB1cnBsZS1kZXNrdG9wLWRldGFpbC0xX0Zvcm1hdC00ODh8ZmNmYzNkMDRjYTc4MjYzYWIwNTgyM2ZiYzJmYTg4ZmUzYWU2NDZhZWU2NmI0YzBhMjM0M2VmZjEyNWY4ZWRiZA",
        description: "The best phone ever",
        is_liked: false,
      },
      {
        id: 3,
        name: "iPhone XS Max",
        image: "https://inventstore.in/wp-content/uploads/2021/09/iPhone-13-Midnight-1.png",
        description: "The best phone ever",
        is_liked: false,
      },
      {
        id: 4,
        name: "iPhone XR",
        image: "https://shop.ee.co.uk/medias/iphone-13-pro-max-5g-alpine-green-desktop-detail-1-Format-488?context=bWFzdGVyfHJvb3R8MTM2NTE5fGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaGZhL2gxYS85ODE0NjY4ODM2ODk0L2lwaG9uZS0xMy1wcm8tbWF4LTVnLWFscGluZS1ncmVlbi1kZXNrdG9wLWRldGFpbC0xX0Zvcm1hdC00ODh8NTJjMmUyYWUyMjlkNTFiZGMxMDQ1Y2NlMWVlMWI2M2VkNmM1NTVmNTYzNmU0YmUxMzMwOThlNzIzYzcwZTU0YQ",
        description: "The best phone ever",
        is_liked: false,
      },
      {
        id: 5,
        name: "iPhone 11",
        image: "https://img.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/1600_JPG/Mobiles/Apple/13-pro/Apple-iPhone-13-Pro-Sierra-Blue-Front-1.png",
        description: "The best phone ever",
        is_liked: false,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})