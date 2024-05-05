import Navbar from "../components/navbar/Navbar"
const page = () => {
    return (
      
      <div>
          <Navbar/> 
        <div class="grid gap-4 grid-cols-3 grid-rows-3">
            <div class="bg-stone-400 p-8 rounded-lg shadow-md w-96 ">
            <h2 class="text-center text-2xl font-bold text-gray-800 mb-6">LOGIN</h2>
            <form action="/login" method="post">
                <div class="mb-4">
                    <input type="text" id="username" name="username" placeholder="Usuario" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                </div>
                <div class="mb-6">
                    <input type="password" id="password" name="password" placeholder="Contraseña" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                </div>
                <div>
                    <button type="submit" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition duration-200">Entrar</button>
                </div>
            </form>
            </div> 
        </div>
      </div>
       
    )
  }
  
  export default page