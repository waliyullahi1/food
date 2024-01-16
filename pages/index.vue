<template>
  <div class="text-[Poppins]">
    <div>
      <NavigationNavBar></NavigationNavBar>


      <section class="  bg-secondary pt  w-full h">
        <div class="bg-[url('@/assets/image/content.png')]  py-25 bg-no-repeat bg-cover w-full h-screen">
          <div class="flex flex-col text-primary container mx-auto justify-center items-center h-full">
            <div class="h-5 w-full"></div>
            <h2 class="text-7xl mt- text-center">Best food for <br> your teste</h2>
            <p class="md:w-1/3 sm:w-1/2 w-full px-3 text-center py-5 text-xl">Discover delectable cruisine and forgetable
              moments in our welcoming, culnary haven</p>
            <div class="gap-2 flex">
              <button
                class="font-medium text-[15px] border-[2px] cursor-pointer border-secondary py-2 px-4 text-white hover:border-primary hover:bg-primary bg-secondary duration-500 ease-out rounded-3xl">Book
                A Table </button>
              <button
                class="font-medium text-[15px] border-[2px] cursor-pointer border-primary py-2 px-4 hover:text-white hover:bg-primary duration-500 ease-out rounded-3xl">Explore
                Menu </button>
              <button> </button>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div>
          <div class=" container mx-auto ">
            <h2 class="text-center text-4xl mt-10 text-primary">Browse Our Menu</h2>
            <div class=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">

              <div v-for="item in state.menuSection " :key="item.id"
                class=" flex flex-col justify-center items-center border-2 py-4 px-4  border-tertiary gap-5 ">

                <div class="w-16 h-16 flex justify-center items-center  bg-primary bg-opacity-20 py-4 px-4 rounded-full">
                  <img v-bind:src="item.image" v-bind:alt="item.alt">
                </div>

                <h1 class=" font-medium text-2xl">{{ item.header }}</h1>
                <p class="text-center">{{ item.parapgraph }}</p>
                <button class=" text-secondary font-medium">Explore menu</button>

              </div>
            </div>

          </div>
        </div>
      </section>


      <section>
        <div>
          <div class=" container bg-tertiary px-2 mx-auto mt-10">
            <div class="grid grid-cols-2 items-center gap-5">
              <div class=" my-16  flex flex-col items-end justify-end  ">
                <div class="w-2/3 overflow-hidden rounded-2xl">
                  <img src="@/assets/image/pizzer.png" class="w-full" alt="" srcset="">
                </div>

                <div class="w-0 h-0 overflow-visible">
                  <div class="relative bottom-32 right-32">
                    <div class=" bg-primary rounded-lg text-white w-fit py-4 px-7 ">
                      <h3 class="font-medium mb-10 ">Come and visit us</h3>
                      <div>
                        <div class="flex flex-col mt-3 item gap-3">
                          <div class=" group font-['Poppins'] ">
                            <div class="text-white flex  items-center gap-1 duration-700 group-hover:text-gray-300 ">
                              <div>
                                <img src="@/assets/image/phone.svg" class="w-4 " alt="email icon">
                              </div>

                              <p class="text-[15px]  ">(414) 857 - 0107</p>
                            </div>

                          </div>


                          <div class=" group font-['Poppins']  ">
                            <div class="text-white items-center flex gap-1 duration-700 group-hover:text-gray-300 ">
                              <div>
                                <img src="@/assets/image/inbox.svg" class="w-4" alt="email icon">
                              </div>

                              <p class="text-[15px]  ">yummy@bistrobliss</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div class=" flex justify-center  ">
                <div class="w-2/3 justify-start flex gap-5 flex-col">
                  <h2 class="text-center w-fit text-5xl mt-10 text-primary">We provide healthy <br> food for your family.
                  </h2>
                  <p>Our story began with a vision to create a unique dining experience that merges fine dining,
                    exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor
                    our local roots while infusing a global palate.</p>
                  <p class="text-[13px]">At place, we believe that dining is not just about food, but also about the
                    overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit
                    an unforgettable event.</p>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="container mx-auto px-5 mt-10">
          <div>
            <div class="">
              <h2 class=" text-4xl text-primary">We also offer unique<br> services for your events</h2>
              <div class=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10">

                <div v-for="item in state.event " :key="item.id"
                  class=" flex flex-col justify-center items-cente border-tertiary gap-5 ">

                  <div class=" flex justify-center rounded-3xl overflow-hidden items-center  ">
                    <img v-bind:src="item.image" v-bind:alt="item.alt">
                  </div>

                  <h1 class=" font-medium text-2xl">{{ item.header }}</h1>
                  <p class="text-cen">{{ item.parapgraph }}</p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class=" bg-tertiary py-5 my10">
        <div class="container mx-auto px-5 mt-10">
          <div class="">
            <div class="">

              <div class="flex justify-center items-center">

                <div class="w-3/5 ">
                  <div class="w-5/6 flex justify-center items-center gap-5">
                    <div>
                      <img src="@/assets/image/mancooking.png" alt="a man that is cooking" />
                    </div>

                    <div class="flex flex-col justify-between gap-3">
                      <img src="@/assets/image/meats.png" alt="meats in tria">
                      <img src="@/assets/image/plantain.png" alt="plantain ">
                    </div>
                  </div>

                </div>

                <div class=" w-fit">
                  <div class="w-2/3">
                    <h2 class=" text-4xl text-primary">Fastest Food <br> Delivery in City</h2>
                    <p class="py-4">Our visual designer lets you quickly and of drag a down your way to customapps for
                      both keep desktop. </p>
                    <div>
                      <div class="mt-10 flex  flex-col gap-2">
                        <div class="flex gap-3">
                          <img src="@/assets/image/clock.png" alt="clock" class=" bg-secondary py-1 px-1 rounded-full"
                            srcset="">
                          <p class=" font-medium">Delivery within 30 minutes</p>
                        </div>
                        <div class="flex gap-3">
                          <img src="@/assets/image/receipt-tax.png" alt="receipt tax"
                            class=" bg-secondary py-1 px-1 rounded-full" srcset="">
                          <p class=" font-medium">Best Offer & Prices</p>
                        </div>
                        <div class="flex gap-3">
                          <img src="@/assets/image/shopping-cart.png" alt="shopping cart"
                            class=" bg-secondary py-1 px-1 rounded-full" srcset="">
                          <p class=" font-medium">Online Services Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div>
          <div class=" container mx-auto ">
            <h2 class="text-center text-4xl mt-10 text-primary">What Our Customers Say</h2>
            <div class=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">

              <div v-for="item in state.reviews " :key="item.id"
                class=" flex flex-col justify-center  h-fit  py-4 px-4  bg-tertiary gap-5 rounded-xl ">
                 <h3 class=" text-secondary text-left font-medium">{{item.header}}</h3>
                <p class="text-c">{{ item.parapgraph }} </p>
               

                <div class=" border-t-2  py-5 w-full">
                   <div class=" flex gap-5 items-center bg-opacity-20 py-4 px-4 rounded-full">
                     <img v-bind:src="item.image" v-bind:alt="item.alt">
                     <div>
                       <div v-for="customer in item.customerdetails "  :key="customer.id" class=" flex flex-col">
                      <h3 class="font-medium">{{customer.name}}</h3>
                      <p>{{customer.position}}</p>
                     </div>
                     </div>
                    

                   </div>
                </div>
               



              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="my-20 py-10 bg-tertiary ">
        <div class="container mx-auto px-5 mt-10">
        <div class="flex justify-between items-center">
           <h2 class=" text-4xl text-primary">Our Blog & Articles</h2>
           <button class="font-medium text-[15px] border-[2px] cursor-pointer border-secondary py-2 px-4 text-white hover:border-primary hover:bg-primary bg-secondary duration-500 ease-out rounded-3xl">Book A Table </button>
        </div>
            <div class="flex gap-2 justify-center items-center  mt-8 justify-ce">
              <div class=" w-1/2" >
                <div class="bg-white shadow-2xl py-4 px-4 rounded-xl">
                  <img src="@/assets/image/andra.png" alt="andra picture" srcset="">
                  <div class="flex flex-col gap-3">
                    <h3 class=" ">January 3, 2023</h3>
                    <h1 class=" font-medium">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
                    <p class="te">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                  </div>
                </div>
              </div>

              <div class=" grid grid-cols-2 gap-4 w-1/2 ">
                <div class="rounded-xl shadow-2xl h-fit w-fit bg-white"  v-for="item in state.news " :key="item.id">
                  <div class="flex gap-3 flex-col">
                      <img class="w-full rounded-xl h-full" v-bind:src="item.image" v-bind:alt="item.alt" srcset="">
                      <div class="flex gap-4 pb-4 flex-col p- px-4">
                        <h3 class=" ">{{ item.date }}</h3>
                        <h1 class="  font-medium">{{item.header}}</h1> 
                      </div>
                   
                  </div>
                </div>
               
                
                

              </div>
              <div>

              </div>
              <div>
                
              </div>
            </div>
        
        </div>
      </section>
      <NavigationFooter></NavigationFooter>
    </div>
  </div>
</template>


<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dash from '@/assets/image/dina.png';
import breakefast from '@/assets/image/breakfast.png'
import drinks from '@/assets/image/drinks.png'
import dessart from '@/assets/image/dina.png'
import friends from '@/assets/image/friends.png';
import marrage from '@/assets/image/marrage.png'
import serving from '@/assets/image/settable.png'
import women from '@/assets/image/women.png'
gsap.registerPlugin(ScrollTrigger);
import customer1 from '@/assets/image/customerpic.png'
import customer2 from '@/assets/image/customerpic2.png'
import customer3 from '@/assets/image/customerpic3.png'
import news1 from '@/assets/image/suzy.png'
import news2 from '@/assets/image/leonardo.png'
import news3 from '@/assets/image/sebastian.png'
import news4 from '@/assets/image/pizzers.png'
const state = reactive({

  menuSection: [

    {
      id: 1,
      image: breakefast,
      alt: 'Breakfast',
      header: 'Breakfast',
      parapgraph: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },

    {
      id: 2,
      image: dash,
      alt: 'Main Dishes',
      header: 'Main Dishes',
      parapgraph: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },

    {
      id: 3,
      image: drinks,
      header: 'drinks',
      alt: 'Drinks',
      header: "Drinks",
      parapgraph: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },

    {
      id: 4,
      image: dessart,
      header: 'Desserts',
      alt: 'Desserts',
      parapgraph: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },


  ],

  event: [

    {
      id: 1,
      image: serving,
      alt: 'one hand want to serve',
      header: 'Caterings',
      parapgraph: 'In the new era of technology we look in the future with certainty for life..',
     
    },

    {
      id: 2,
      image: women,
      alt: 'women that is doing birthday',
      header: 'Birthdays',
      parapgraph: 'In the new era of technology we look in the future with certainty for life.'
    },

    {
      id: 3,
      image: marrage,
      header: ' Weddings',
      alt: 'husband and wife in the weddings day',
      parapgraph: 'In the new era of technology we look in the future with certainty for life.'
    },

    {
      id: 4,
      image: friends,
      header: 'Events ',
      alt: 'three friends eating together',
      parapgraph: 'In the new era of technology we look in the future with certainty for life.'
    },


  ],

  news: [

    {
      id: 1,
      image: news1,
      alt: 'A suzy',
      header: 'How to prepare the perfect french fries in an air fryer',
      date: 'January 3, 2023',
     
    },

    {
      id: 2,
      image: news2,
      alt: 'A leonardo',
      header: 'How to prepare delicious chicken tenders',
      date: 'January 3, 2023',
    },

    {
      id: 3,
      image: news3,
      alt: 'A sebastian',
      header: '7 delicious cheesecake recipes you can prepare',
      date: 'January 3, 2023',
    },

    {
      id: 4,
      image: news4,
      alt: 'A pizzer',
      header: '5 great pizza restaurants you should visit this city',
      date: 'January 3, 2023',    },


  ],

reviews: [

{
  id: 1,
  image: customer1,
  alt: 'our customer',
  header: '“Simply delicious”',
  parapgraph: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
  customerdetails:[
        {id:1, name:"Sophire Robson",},
        {id:2,  position:"Los Angeles, CA",}
       
    ],

},

{
  id: 2,
  image: customer2,
  alt: 'our customer',
  header: '“The best restaurant”',
  parapgraph: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
  customerdetails:[
        {id:1, name:"Sophire Robson",},
        {id:2,   position:"Los Angeles, CA"}
       
    ],
  
},

{
  id: 3,
  image: customer3,
  header: ' “One of a kind restaurant”',
  alt: 'our customer',
  parapgraph: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
      customerdetails:[
        {id:1, name:"Sophire Robson",},
        {id:2,   position:"Los Angeles, CA"}
       
    ],
},




]
});
</script>

<style scoped>
h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 100;
}


</style>