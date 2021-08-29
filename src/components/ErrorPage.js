import React from 'react'
import style from "../Styles/error.module.css"
import { BiErrorCircle } from "react-icons/bi"

const ErrorPage = () => {
  return (
    <div className={style.error}>
      <BiErrorCircle className={style.icon} />
      <p>
        Ooops! Page Not Found
      </p>
    </div>
  )
}

export default ErrorPage
