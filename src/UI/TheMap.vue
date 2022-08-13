<template>
  <div class="relative bg-green-700 overflow-hidden">
   
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-white hover:text-gray-300">{{ item.name }}</a>
            </div>
          </div>
          <div class="hidden md:flex">
            <a href="/#login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-gray-700"> Log in </a>
          </div>
        </nav>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <a href="/#login" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"> Log in </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

    </div>
    
    <div class="p-5 inline-block">
        <div class="mapouter ">
            <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Clevory,%20Tunisia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://123movies-to.org"></a><br><a href="https://www.embedgooglemap.net">how to add google maps to website</a></div></div>
                
    </div>
    <div class="inline-block ss md:float-none"> <svg  xmlns="http://www.w3.org/2000/svg" id="currentIllo" data-name="Layer 1" width="400" height="582.53467" viewBox="0 0 721.11239 582.53467" class="injected-svg DownloadModal__ImageFile-sc-p17csy-5 iIfSkb grid_media" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M719.63469,741.26733l-.153-.01452L480.3662,719.04034,262.93028,739.239a21.49791,21.49791,0,0,1-23.39415-19.41735q-.09207-.99134-.09215-1.988V200.70651a21.40162,21.40162,0,0,1,19.50937-21.40539l221.41288-20.56845.153.01452,239.11545,22.21245L937.06956,160.761a21.49792,21.49792,0,0,1,23.39429,19.41721q.0921.99142.09216,1.98819V699.29309a21.40186,21.40186,0,0,1-19.50927,21.40576Z" transform="translate(-239.4438 -158.73267)" fill="#3f3d56"></path><path d="M572.76414,350.0441c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969Zm378.18.50434q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969ZM572.76414,350.0441c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm143.92791.31421c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969ZM261.83113,587.033v3.30737H392.45531v47.95673H261.83113v3.30737H395.76265V587.033Zm163.69779,84.33771v33.51184l3.30737-.306V674.678H938.16978v-3.30737Zm512.64086-81.03034V587.033H425.52892v54.57147H938.16978v-3.30737H428.83626V590.34033Zm-308.866-240.6105A1613.79575,1613.79575,0,0,0,428.83626,217.6422v-33.487l-3.30738.30592v33.74622l2.54673,2.80012A1610.4861,1610.4861,0,0,1,627.73247,352.69l.44653.34726H938.16978v-3.30737Zm-236.84851,0H261.83113v3.30737H395.76265V187.22276l-3.30737.30593ZM938.16978,382.8035H665.65166l3.56372,2.927q50.32928,41.41231,98.832,87.84354,6.896,6.59811,13.74219,13.30383,34.08224,33.301,66.83355,68.77655l2.72663,1.61236h86.82v-3.30737H851.55821q-32.39565-35.12421-66.1969-68.21429-6.75906-6.623-13.56817-13.155-47.45271-45.53-96.93085-86.47922H938.16978ZM261.83113,671.37067V674.678H392.45531v33.272l3.30737-.30591V671.37067Zm0-288.56717v3.30737H392.45531V553.95941H261.83113v3.30737H395.76265V382.8035Zm310.933-32.7594c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969ZM572.76414,350.0441c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969Z" transform="translate(-239.4438 -158.73267)" fill="#fff"></path><path d="M608.77959,376.37775c0,41.88122-75.83267,135.18-75.83267,135.18s-75.83267-93.29876-75.83267-135.18a75.83267,75.83267,0,0,1,151.66534,0Z" transform="translate(-239.4438 -158.73267)" fill="#63ff7e"></path><path d="M567.61419,373.08068a34.66638,34.66638,0,1,1-34.66638-34.66638A34.65047,34.65047,0,0,1,567.61419,373.08068Z" transform="translate(-239.4438 -158.73267)" fill="#fff" style="isolation:isolate"></path><circle cx="293.50312" cy="387.1146" r="20.44185" fill="#63ff7e"></circle><circle cx="489.36398" cy="100.27214" r="30.22324" fill="#ff6584"></circle><path d="M823.58447,352.14173H675.31834a3.02384,3.02384,0,0,1-.55407-.0439l70.12308-121.46324a4.90981,4.90981,0,0,1,8.54664,0l47.06138,81.51127,2.25462,3.90031Z" transform="translate(-239.4438 -158.73267)" fill="#fff"></path><polygon points="584.141 193.409 533.519 193.409 558.369 157.313 560.157 154.713 561.052 153.413 563.306 157.313 584.141 193.409" opacity="0.2" style="isolation:isolate"></polygon><path d="M906.138,352.14173H777.9l24.85-36.09556,1.78829-2.60022,32.38181-47.03945c2.12294-3.08293,7.23007-3.27491,9.726-.58148a5.853,5.853,0,0,1,.46631.58148Z" transform="translate(-239.4438 -158.73267)" fill="#fff"></path><circle cx="676.20989" cy="349.33488" r="15.2965" fill="#fff"></circle><polygon points="677.685 395.409 674.552 395.409 675.98 347.031 677.685 395.409" fill="#cbcbcb"></polygon><polygon points="676.256 356.2 679.62 351.546 676.21 357.352 675.842 356.707 676.256 356.2" fill="#cbcbcb"></polygon><polygon points="675.888 360.899 672.524 356.246 675.934 362.051 676.302 361.406 675.888 360.899" fill="#cbcbcb"></polygon><circle cx="632.71557" cy="327.36152" r="22.59163" fill="#fff"></circle><polygon points="634.893 395.409 630.266 395.409 632.376 323.959 634.893 395.409" fill="#cbcbcb"></polygon><polygon points="632.784 337.5 637.751 330.628 632.716 339.202 632.172 338.249 632.784 337.5" fill="#cbcbcb"></polygon><polygon points="632.24 344.441 627.272 337.569 632.308 346.142 632.852 345.19 632.24 344.441" fill="#cbcbcb"></polygon><circle cx="108.20989" cy="349.33488" r="15.2965" fill="#fff"></circle><polygon points="109.685 395.409 106.552 395.409 107.98 347.031 109.685 395.409" fill="#cbcbcb"></polygon><polygon points="108.256 356.2 111.62 351.546 108.21 357.352 107.842 356.707 108.256 356.2" fill="#cbcbcb"></polygon><polygon points="107.888 360.899 104.524 356.246 107.934 362.051 108.302 361.406 107.888 360.899" fill="#cbcbcb"></polygon><circle cx="64.71557" cy="327.36152" r="22.59163" fill="#fff"></circle><polygon points="66.893 395.409 62.266 395.409 64.376 323.959 66.893 395.409" fill="#cbcbcb"></polygon><polygon points="64.784 337.5 69.751 330.628 64.716 339.202 64.172 338.249 64.784 337.5" fill="#cbcbcb"></polygon><polygon points="64.24 344.441 59.272 337.569 64.308 346.142 64.852 345.19 64.24 344.441" fill="#cbcbcb"></polygon></svg></div>
    <div class="w-full pt-8">
        <span class="text-white text-3xl mark">Mark a point</span>
       <p class=" mark pt-5">Mark the spot based on the you are cleaning in, so it can be shared to others.</p>
        
    </div>
    <div class="mark pt-5  mb-8">
         <button type="button" class=" inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Spot</button></div>     
   
    </div>
     <div class="relative mt-8">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="px-3 bg-white text-lg font-medium text-gray-900 font-thin "> History </span>
    </div>
  </div>
               <div>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="activityItem in activityItems" :key="activityItem.id" class="py-4">
        <div class="flex space-x-3">
          <img class="h-6 w-6 rounded-full" :src="activityItem.person.imageUrl" alt="" />
          <div class="flex-1 space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">{{ activityItem.person.name }}</h3>
              <p class="text-sm text-gray-500">{{ activityItem.time }}</p>
            </div>
            <p class="text-center text-sm text-gray-500">Just Gave {{ activityItem.Size }} ( Code : {{ activityItem.commit }} ) of {{ activityItem.Type }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>     
    <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="px-2 bg-white text-sm text-gray-500"> </span>
    </div>
  </div>
  <div class="font-medium p-5 text-center footer">
    Powered By <span class="text-sky-500">Nawarni</span>

  </div>  
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
const navigation = [
  { name: 'About Us', href: '/#about' },
  { name: 'Features', href: '/#feature' },
  { name: 'Meet the team', href: '/#team' },

];
const people = [
  {
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  {
    name: 'Brahim Msaken',
    imageUrl:
      'https://images.unsplash.com/photo-1655586542508-ed7264cfe041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  // More people...
];
const activityItems = [
  { id: 1, person: people[0], Size: '12Kg', commit: '2d89f0c8', Type: 'Plastic', time: '1h' },
   { id: 2, person: people[1], Size: '20Kg', commit: '2tegddfv', Type: 'Plastic', time: '2h' },
  // More items...
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,

    MenuIcon,
    XIcon,
  },
setup() {
    return {
      navigation,
     people,
     activityItems,
    }
  },
mounted () {
  window.scrollTo(0, 0)
}
}
</script>
<style scoped>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}
.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.mapouter{position:relative;text-align:right;height:500px;width:600px;} 
.ss {
    float:right;
    padding-right:10%
}

.mark {
    padding-left:5%;


}
    </style>
