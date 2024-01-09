import estilos from "./NotificationService.module.css"
import { createContext, useState, useContext, useEffect } from "react"




const Notification = ({notificationData}) =>{

    const [notificationStyle, setNotificationStyle] = useState(estilos.notificationSuccess)


    useEffect(()=>{
        const notificationColor = ()=>{
            if(notificationData.type == "error"){
                return setNotificationStyle(estilos.notificationError)
            } else if(notificationData.type == "info"){
                    return setNotificationStyle(estilos.notificationInfo)
                } else{
                setNotificationStyle(estilos.notificationSuccess)
            }
        }
        setNotificationStyle(notificationColor)
    }, [notificationStyle])


    return(
        <div className={notificationStyle} > 
            {notificationData.text}
        </div>
    )
}





//CREACION DEL CONTEXT
const NotificationContext = createContext()



//COMPONENTE PARA COMPARTIR LA FUNCIONABILIDAD
export const NotificationProvider = ({children}) =>{
    //CREACION DE LA NOTIFICACION
    const [notificationData, setNotificationData] = useState(
        {
            type: "success",
            text: ""
        }
        )




    //CREACION DE FUNCION PARA SETEAR EL ESTADO
    const showNotification = (type, text) =>{
        setNotificationData({
            type, text
        })
        
        setTimeout(()=>{

            setNotificationData(prev => ({...prev, text: ""}))
        }, 2500)
    }

    

    





    return(
        <NotificationContext.Provider value={{showNotification}}>
            { notificationData.text && <Notification notificationData={notificationData} />}
            {children}
        </NotificationContext.Provider>
    )
}



//Custom hook para compartir la notificacion
export const useNotification = () =>{
    return useContext(NotificationContext)
}
