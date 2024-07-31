<template>
    
    <section class="bg-green-50">
      <div v-if="!singleItem" class="flex text-center justify-center">
        <PulseLoader/>
      </div>
      <div v-else class="container m-auto py-10 px-6">
       <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        
         <div>
           <div 
             class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
           >
             <div class="text-gray-500 mb-4">{{singleItem[0].type}}</div>
             <h1 class="text-3xl font-bold mb-4">{{singleItem[0].title}}</h1>
             <div
               class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
               <i
                 class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
               ></i>
               <p class="text-orange-700">{{singleItem[0].location}}</p>
             </div>
           </div>

           <div class="bg-white p-6 rounded-lg shadow-md mt-6">
             <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
             </h3>

             <p class="mb-4">
               {{singleItem[0].description}}
             </p>

             <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{{singleItem[0].salary}}/ Year</p> 
           </div>
         

         
         <aside>
           
           <div class="bg-white p-6 rounded-lg shadow-md">
             <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{{singleItem[0].company.name}}</h2> 

             <p class="my-2">
               {{singleItem[0].company.description}}
             </p>

             <hr class="my-4" />

             <h3 class="text-xl">Contact Email:</h3>

             <p class="my-2 bg-green-100 p-2 font-bold">
                 {{singleItem[0].company.contactEmail}} 
             </p> 

             <h3 class="text-xl">contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{singleItem[0].company.contactPhone}}</p> 
           </div>

          
           <div class="bg-white p-6 rounded-lg shadow-md mt-6">
             <h3 class="text-xl font-bold mb-6">Manage Job</h3>
               <RouterLink
               :to="`/jobs/edit/${singleItem[0].id}`"
               class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
               >Edit Job</RouterLink
             >  
             <button @click="deleteJob(jobId)"
               class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
             >
               Delete Job
             </button>
           </div>
           
         </aside>
         
       </div>
     </div> 
     </div>
   </section>
  
</template>

<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import {ref,onMounted} from "vue"
import {useRoute,RouterLink, useRouter} from "vue-router"
import BackButton from "@/components/BackButton.vue";
import { useToast } from "vue-toastification";
import jobs from "@/jobs.json"



const route = useRoute()
const toast=useToast()
const router=useRouter()
const jobId = route.params.id;

const job=ref(null)
const singleItem = ref(null)

const getJobsFromStorage =() =>{
  const jobb=JSON.parse(localStorage.getItem("jobs"))
  job.value = jobb
}

const singleJobById=()=>{
  const jobById=job.value.filter((jobss)=> jobss.id==jobId)
  singleItem.value = jobById
}

onMounted(()=>{
  getJobsFromStorage()
  singleJobById()
})


const deleteJob=(id)=>{
 
  // console.log(singleItem.value)
    const confirm=window.confirm("Are You Sure You Want To Delete This Job")
    if (confirm) {
      // console.log(job.value);
      
 const data =job.value.filter((jobss)=> jobss.id != id)
 localStorage.setItem('jobs', JSON.stringify(data))

    router.push("/jobs")
    toast.success("Deleted Successfully")
    }else{
    toast.error("Job Not Deleted")
    }
  }



</script>

