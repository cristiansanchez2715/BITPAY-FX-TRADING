import React from 'react'
import { useState, useEffect } from 'react'

function Home() {
const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

const handleScroll = () => {
    if(window.scrollY > 300){
        setScrolling(true)
    }
    else{
        setScrolling(false)
    }
}


const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='container-central-all-home-section'>
        <div className={scrolling ? 'active container-navigate-for-home' : 'container-navigate-for-home'}>
<nav className='navigate-for-home'>
    <div className='options-navigate-container'>
    <a className='item-navigate' onClick={() => {
        scrollToSection("h1-1")
    }}>Como lo Hago?</a>
    <a className='item-navigate' onClick={() => {
        scrollToSection("h1-2")
    }}>Como puedo Empezar?</a>
    <a className='item-navigate' onClick={() => {
        scrollToSection("h1-3")
    }}>Como Funciona?</a>
    <a className='item-navigate' onClick={() => {
        scrollToSection("h1-4")
    }}>No lo se</a>
    <a className='item-navigate' onClick={() => {
        scrollToSection("h1-5")
    }}>Quiero Invertir!</a>
    </div>
</nav>


</div>
<div className='animation-hola'></div>
        <div  className='contenedor-information-product'>
        <h1 id='h1-1'>Como lo Hago?</h1>
        <div className='container-information'>
        <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
        </div>
        <div className='animation2'></div>
    </div>
    <div className='contenedor-information-product'>
    
        <h1 id='h1-2' style={{marginTop: "100px"}}>Como Puedo Empezar?</h1>
        <div className='container-information'>
        <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
        </div>
    </div>

    <div className='contenedor-information-product'>
        <h1 id='h1-3'>Como Funciona?</h1>
        <div className='container-information'>
        <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
        </div>
    </div>


    <div className='contenedor-information-product'>
        <h1 id='h1-4'>NO Lo Se y Quiero Que Me Den informacion?</h1>
        <div className='container-information'>
        <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
        </div>
    </div>

    <div className='contenedor-information-product'>
        <h1 id='h1-5'>Quiero Invertir?</h1>
        <div className='container-information'>
        <p className='information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
        </div>
    </div>
    </div>
  )
}

export default Home