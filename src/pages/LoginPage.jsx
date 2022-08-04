import React from 'react'
import { Link } from 'react-router-dom'
import { FieldButton, FieldForm, FieldText } from '../components/field/field'

const LoginPage = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="relative grid grid-cols-1 py-6 h-screen">
        <Link to="/" className="text-2xl font-roboto font-bold">Hitech</Link>
        <div className="flex bg-zinc-900 flex-col text-white p-6 rounded-lg drop-shadow-2xl h-fit w-full md:w-8/12 lg:w-2/5 sm:w-9/12 justify-self-center">
          <h2 className="text-center text-3xl font-roboto mb-3">Login</h2>
          <form action="">
            <FieldForm labelFor="email" label="Email *" type="email" inputName="email" value="e.g johndoe@gmail.com" />
            <FieldForm labelFor="password" label="Password *" type="password" inputName="password" value="e.g *****" />
            <FieldButton text="Login" />
            <FieldText text="Don't have an account?" linkTo="/register" link="Register" />
          </form>
        </div>

      </div>
    </div>
  )
}

export default LoginPage