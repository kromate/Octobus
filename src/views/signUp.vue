<template>
    <div class="w-screen h-screen  items-center flex flex-col">
        <h1 class='text-xl text-primary mb-4 mt-10 font-bold'> Create account </h1>
        <p class='text-primary mb-4'> Get to every class on time with Octubus! </p>

        <form @submit.prevent="handleSubmit" class="mt-4 mx-4">
     
        <input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Email" type="email" name="email" v-model="email" required>

        <input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Password" type="password" name="password" v-model="password1" required>

        <input class="w-full rounded-xl p-3 bg-lightGray text-gray my-4" placeholder="Confirm Password" type="password" name="password" v-model="password2"  required>

        <button class="w-full mt-4 p-3 text-center rounded-xl bg-primary text-white">Sign up</button>

        <div class='text-base text-red-700 my-4' v-if="error">{{ error }}</div>
    </form>


    </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
 name:'signUp',

 setup(){

    const email = ref('')
    const password1 = ref('')
    const password2 = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        if (password1.value != password2.value ){
            error.value = 'Password does not match'
        }
        else if(password1.value.length < 8){
            error.value = 'A mininmum of 8 characters is required for verification'
        }
        else{
        await store.dispatch('signup', {
          email: email.value,
          password: password1.value
        })
        router.push('/')
        }
      }
      catch (err) {
        error.value = err.message
      }
    }

    




    return {handleSubmit,error,password1,password2,email } 
 }

}
</script>