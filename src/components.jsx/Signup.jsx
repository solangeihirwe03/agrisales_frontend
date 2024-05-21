import React, {useState} from 'react'
import image3 from "../../public/image5.jpeg"

const Signup = () => {
        const [selectedOption, setSelectedOption] = useState('');
        const handleChange = (e) => {
            setSelectedOption(e.target.value);
        }
    
  return (
    <div>
      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 bg-[[#F3F6F0]">
            <img
              alt=""
              src={image3}
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div class="hidden lg:relative lg:block lg:p-12"></div>
          </section>

          <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl ">

              <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="FirstName"
                    class="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    class="mt-1 px-4 py-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="LastName"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    class="mt-1 px-4 py-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    class="mt-1 px-4 py-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    class="mt-1 px-4 py-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="options" className="font-semibold">
                    Select an option:
                  </label>
                  <select
                    id="options"
                    value={selectedOption}
                    onChange={handleChange}
                    className="font-semibold"
                  >
                    <option value="">Select...</option>
                    <option value="option1">Farmer</option>
                    <option value="option2">Buyer</option>
                    <option value="option3">Agronomist</option>
                  </select>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button class="inline-block shrink-0 rounded-md border border-[#FF9C00] bg-[#FF9C00] px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/Login" class="text-[#FF9C00] underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Signup
