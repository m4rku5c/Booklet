import React, {useRef, useState, useCallback} from 'react'
import HTMLFlipBook from "react-pageflip"

import '../styles/book.css'
import '../styles/main-container.css'

import DefaultPageLayout from '../pages/DefaultPage'
import BookControls from './BookControls'
import TableOfContents from '../pages/TableOfContents'

import GSIPage from '../pages/GSIPage'
import GSIPage2 from '../pages/GSIPage2'
import GSIPage3 from '../pages/GSIPage3'
import signet from '../../public/assets/signet.png'

import MDX from '../cards/MDX'
import top1 from '../../public/assets/top1.png'
import back1 from '../../public/assets/back1.png'

import Sidebar from './Sidebar'
import openside from '../../public/assets/openside.png'
import closeside from '../../public/assets/closeside.png'


import bluewood from '../../public/assets/bluewood.png'
import backgroundImage from '../../public/assets/landing.png'


//KAY Natural
import kay_natural_21_top from '../../public/assets/booklet/kay/natural/kay-21-bridal-reg-top.png'


import kay_natural_21_back from '../../public/assets/booklet/kay/natural/kay-21-bridal-reg-back.png'

import kay_natural_22_top from '../../public/assets/booklet/kay/natural/kay-22-bridal-sol-top.png'
import kay_natural_22_back from '../../public/assets/booklet/kay/natural/kay-22-bridal-sol-back.png'

import kay_natural_25_top from '../../public/assets/booklet/kay/natural/kay-25-sol-studs-sol-pend-top.png'
import kay_natural_25_back from '../../public/assets/booklet/kay/natural/kay-25-sol-studs-sol-pend-back.png'

import kay_natural_34_top from '../../public/assets/booklet/kay/natural/kay-34-annv-fashion-top.png'
import kay_natural_34_back from '../../public/assets/booklet/kay/natural/kay-34-annv-fashion-back.png'


//Kay LCD
import kay_lcd_21_top from '../../public/assets/booklet/kay/lcd/kay-lcd-21-top.png'
import kay_lcd_21_back from '../../public/assets/booklet/kay/lcd/kay-lcd-21-back.png'

import kay_lcd_23_top from '../../public/assets/booklet/kay/lcd/kay-lcd-23-top.png'
import kay_lcd_23_back from '../../public/assets/booklet/kay/lcd/kay-lcd-23-back.png'

import kay_lcd_24_top from '../../public/assets/booklet/kay/lcd/kay-lcd-24-top.png'
import kay_lcd_24_back from '../../public/assets/booklet/kay/lcd/kay-lcd-24-back.png'

import kay_lcd_25_top from '../../public/assets/booklet/kay/lcd/kay-lcd-25-top.png'
import kay_lcd_25_back from '../../public/assets/booklet/kay/lcd/kay-lcd-25-back.png'


import kay_lcd_31_top from '../../public/assets/booklet/kay/lcd/kay-lcd-31-top.png'
import kay_lcd_31_back from '../../public/assets/booklet/kay/lcd/kay-lcd-31-back.png'


import kay_lcd_33_top from '../../public/assets/booklet/kay/lcd/kay-lcd-33-top.png'
import kay_lcd_33_back from '../../public/assets/booklet/kay/lcd/kay-lcd-33-back.png'

import kay_lcd_34_top from '../../public/assets/booklet/kay/lcd/kay-lcd-34-top.png'
import kay_lcd_34_back from '../../public/assets/booklet/kay/lcd/kay-lcd-34-back.png'

//Kay Ruby
import kay_51_top from '../../public/assets/booklet/kay/ruby/kay-51-rubyonly-top.png'
import kay_52_top from '../../public/assets/booklet/Kay/Ruby/kay_ruby_52_top.png'
import kay_52_back from '../../public/assets/booklet/kay/ruby/kay_ruby_52_back.png'


// Kay Outlet Natural
import kayo_21_top from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-21-top.png'
import kayo_21_back from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-21-back.png'

import kayo_22_top from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-21-top.png'
import kayo_22_back from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-21-back.png'

import kayo_25_top from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-25-top.png'
import kayo_25_back from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-25-back.png'

import kayo_34_top from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-34-top.png'
import kayo_34_back from '../../public/assets/booklet/kayoutlet/nat/kayo-nat-34-back.png'

// Kay Outlet LCD
import kayo_lcd_21_top from '../../public/assets/booklet/kayoutlet/lcd/kayo-lcd-21-top.png'
import kayo_lcd_21_back from '../../public/assets/booklet/kayoutlet/lcd/kayo-lcd-21-back.png'

import kayo_lcd_25_top from '../../public/assets/booklet/kayoutlet/lcd/kayo-lcd-25-top.png'
import kayo_lcd_25_back from '../../public/assets/booklet/kayoutlet/lcd/kayo-lcd-25-back.png'

import kayo_lcd_34_top from '../../public/assets/booklet/kayoutlet/lcd/kayo-lcd-34-top.png'
import kayo_lcd_34_back from '../../public/assets/booklet/kayoutlet/lcd/kayo-lcd-34-back.png'


// Kay Outlet Ruby

import kayo_ruby_51_top from '../../public/assets/booklet/KayOutlet/Ruby/kayo-ruby-51-top.png'

import kayo_ruby_52_top from '../../public/assets/booklet/KayOutlet/Ruby/kayo-ruby-52-top.png'
import kayo_ruby_52_back from '../../public/assets/booklet/KayOutlet/Ruby/kayo-ruby-52-back.png'


// Jared N

import j_n_21_top from '../../public/assets/booklet/Jared/nat/jared-n-21-top.png'
import j_n_21_back from '../../public/assets/booklet/Jared/nat/jared-n-21-back.png'

import j_n_22_top from '../../public/assets/booklet/Jared/nat/jared-n-22-top.png'
import j_n_22_back from '../../public/assets/booklet/Jared/nat/jared-n-22-back.png'

import j_n_25_top from '../../public/assets/booklet/Jared/nat/jared-n-25-top.png'
import j_n_25_back from '../../public/assets/booklet/Jared/nat/jared-n-25-back.png'

import j_n_34_top from '../../public/assets/booklet/Jared/nat/jared-n-34-top.png'
import j_n_34_back from '../../public/assets/booklet/Jared/nat/jared-n-34-back.png'

// Jared LCD

import j_l_21_top from '../../public/assets/booklet/Jared/lcd/jared-l-21-top.png'
import j_l_21_back from '../../public/assets/booklet/Jared/lcd/jared-l-21-back.png'

import j_l_31_top from '../../public/assets/booklet/Jared/lcd/jared-l-31-top.png'
import j_l_31_back from '../../public/assets/booklet/Jared/lcd/jared-l-31-back.png'

import j_l_34_top from '../../public/assets/booklet/Jared/lcd/jared-l-34-top.png'
import j_l_34_back from '../../public/assets/booklet/Jared/lcd/jared-l-34-back.png'

//Jared Vault Nat
import jo_n_25_top from '../../public/assets/booklet/JaredVault/nat/jaredv-n-25-top.png'
import jo_n_25_back from '../../public/assets/booklet/JaredVault/nat/jaredv-n-25-back.png'


//Jared Vault LCD
import jo_l_21_top from '../../public/assets/booklet/JaredVault/lcd/jaredv-l-21-top.png'
import jo_l_21_back from '../../public/assets/booklet/JaredVault/lcd/jaredv-l-21-back.png'


// peoples nat

import p_n_21_top from '../../public/assets/booklet/Peoples/nat/peoples-n-21-top.png'
import p_n_21_back from '../../public/assets/booklet/Peoples/nat/peoples-n-21-back.png'

import p_n_22_top from '../../public/assets/booklet/Peoples/nat/peoples-n-22-top.png'
import p_n_22_back from '../../public/assets/booklet/Peoples/nat/peoples-n-22-back.png'

import p_n_23_top from '../../public/assets/booklet/Peoples/nat/peoples-n-23-top.png'
import p_n_23_back from '../../public/assets/booklet/Peoples/nat/peoples-n-23-back.png'

import p_n_25_top from '../../public/assets/booklet/Peoples/nat/peoples-n-25-top.png'
import p_n_25_back from '../../public/assets/booklet/Peoples/nat/peoples-n-25-back.png'

import p_n_26_top from '../../public/assets/booklet/Peoples/nat/peoples-n-26-top.png'
import p_n_26_back from '../../public/assets/booklet/Peoples/nat/peoples-n-26-back.png'

import p_n_27_top from '../../public/assets/booklet/Peoples/nat/peoples-n-27-top.png'
import p_n_27_back from '../../public/assets/booklet/Peoples/nat/peoples-n-27-back.png'

//poeples lcd

import p_l_31_top from '../../public/assets/booklet/Peoples/lcd/peoples-l-31-top.png'
import p_l_31_back from '../../public/assets/booklet/Peoples/lcd/peoples-l-31-back.png'

import p_l_34_top from '../../public/assets/booklet/Peoples/lcd/peoples-l-34-top.png'

//peoples ruby

import p_r_51_top from '../../public/assets/booklet/Peoples/ruby/peoples-r-51-top.png'
import p_r_51_back from '../../public/assets/booklet/Peoples/ruby/peoples-r-51-back.png'

import p_r_54_top from '../../public/assets/booklet/Peoples/ruby/peoples-r-54-top.png'


// Zales nat
import z_n_21_top from '../../public/assets/booklet/Zales/nat/zales-n-21-top.png'
import z_n_21_back from '../../public/assets/booklet/Zales/nat/zales-n-21-back.png'

import z_n_22_top from '../../public/assets/booklet/Zales/nat/zales-n-22-top.png'
import z_n_22_back from '../../public/assets/booklet/Zales/nat/zales-n-22-back.png'

import z_n_23_top from '../../public/assets/booklet/Zales/nat/zales-n-23-top.png'
import z_n_23_back from '../../public/assets/booklet/Zales/nat/zales-n-23-back.png'

import z_n_25_top from '../../public/assets/booklet/Zales/nat/zales-n-25-top.png'
import z_n_25_back from '../../public/assets/booklet/Zales/nat/zales-n-25-back.png'

import z_n_26_top from '../../public/assets/booklet/Zales/nat/zales-n-26-top.png'

import z_n_27_top from '../../public/assets/booklet/Zales/nat/zales-n-27-top.png'
import z_n_27_back from '../../public/assets/booklet/Zales/nat/zales-n-27-back.png'

import z_n_28_top from '../../public/assets/booklet/Zales/nat/zales-n-28-top.png'
import z_n_28_back from '../../public/assets/booklet/Zales/nat/zales-n-28-back.png'


// Zales lcd
import z_l_21_top from '../../public/assets/booklet/Zales/lcd/zales-l-21-top.png'

import z_l_22_top from '../../public/assets/booklet/Zales/lcd/zales-l-22-top.png'

import z_l_23_top from '../../public/assets/booklet/Zales/lcd/zales-l-23-top.png'
import z_l_23_back from '../../public/assets/booklet/Zales/lcd/zales-l-23-back.png'

import z_l_24_top from '../../public/assets/booklet/Zales/lcd/zales-l-24-top.png'
import z_l_24_back from '../../public/assets/booklet/Zales/lcd/zales-l-24-back.png'

import z_l_25_top from '../../public/assets/booklet/Zales/lcd/zales-l-25-top.png'

import z_l_31_top from '../../public/assets/booklet/Zales/lcd/zales-l-31-top.png'
import z_l_31_back from '../../public/assets/booklet/Zales/lcd/zales-l-31-back.png'

import z_l_34_top from '../../public/assets/booklet/Zales/lcd/zales-l-34-top.png'

// Zales ruby
import z_r_52_top from '../../public/assets/booklet/Zales/ruby/zales-r-52-top.png'
import z_r_52_back from '../../public/assets/booklet/Zales/ruby/zales-r-52-back.png'



// Zales Outlet Nat
import zo_n_22_top from '../../public/assets/booklet/ZalesOutlet/nat/zaleso-n-22-top.png'
import zo_n_22_back from '../../public/assets/booklet/ZalesOutlet/nat/zaleso-n-22-back.png'

import zo_n_25_top from '../../public/assets/booklet/ZalesOutlet/nat/zaleso-n-25-top.png'
import zo_n_25_back from '../../public/assets/booklet/ZalesOutlet/nat/zaleso-n-25-back.png'



// Zales Outlet LCD
import zo_l_21_top from '../../public/assets/booklet/ZalesOutlet/lcd/zaleso-l-21-top.png'

// Zales Outlet Ruby
import zo_r_51_top from '../../public/assets/booklet/ZalesOutlet/ruby/zaleso-r-51-top.png'

import zo_r_52_top from '../../public/assets/booklet/ZalesOutlet/ruby/zaleso-r-52-top.png'
import zo_r_52_back from '../../public/assets/booklet/ZalesOutlet/ruby/zaleso-r-52-back.png'



function MyBook(props) {
   const bookRef = useRef()

   const [pageCover, setPageCover] = useState(bluewood)
  
   const [isSidebarOpen, setIsSideBarOpen] = useState(false)

   const [currentPage, setCurrentPage] = useState(0)

   function handleGoTo(pageNum) {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNum, "top")
      console.log('flipping to page ', pageNum)
    }
   }

   const onFlip = useCallback((e) => {
    console.log('Current page: ' + e.data);
    setCurrentPage(e.data + 1)
}, []);


   
   
   const [bookPages, setBookPages] = useState([
        <GSIPage />,
        <GSIPage2 logo={signet}/>,
        <TableOfContents functionInput={handleGoTo} />,
        //<DefaultPageLayout header="header" headertwo="subheader" footer="2" content={<MDX frontImg={top1} backImg={back1}/>}/>,
        // Kay Pages
          <GSIPage3 header="KAY Natural"/>,
          //Natural
          <DefaultPageLayout header="KAY/Natural Diamond/21 - Bridal Reg" footer="5" content={<MDX frontImg={kay_natural_21_top} backImg={kay_natural_21_back}/>}/>,
          <DefaultPageLayout header="KAY/Natural Diamond/22 - Bridal Solitaire" footer="6" content={<MDX frontImg={kay_natural_22_top} backImg={kay_natural_22_back}/>}/>,
          <DefaultPageLayout header="KAY/Natural Diamond/25 - Solitaire Studs | Pendants" footer="7" content={<MDX frontImg={kay_natural_25_top} backImg={kay_natural_25_back}/>}/>,
          <DefaultPageLayout header="KAY/Natural Diamond/34 - Anniversary | Fashion" footer="8" content={<MDX frontImg={kay_natural_34_top} backImg={kay_natural_34_back}/>}/>,

          //LCD
          <GSIPage3 header="KAY LCD"/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/21 - Bridal Reg" footer="10" content={<MDX frontImg={kay_lcd_21_top} backImg={kay_lcd_21_back}/>}/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/23 - 3 Stone Style" footer="11" content={<MDX frontImg={kay_lcd_23_top} backImg={kay_lcd_23_back}/>}/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/24 - 2 Stone Style" footer="12" content={<MDX frontImg={kay_lcd_24_top} backImg={kay_lcd_24_back}/>}/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/25 - Solitaire Studs | Pendants " footer="13" content={<MDX frontImg={kay_lcd_25_top} backImg={kay_lcd_25_back}/>}/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/31 - Bridal CTR-CTW" footer="14" content={<MDX frontImg={kay_lcd_31_top} backImg={kay_lcd_31_back}/>}/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/33 - Solitaire Studs | Pendants" footer="15" content={<MDX frontImg={kay_lcd_33_top} backImg={kay_lcd_33_back}/>}/>,
          <DefaultPageLayout header="KAY/Lab Created Diamond/34 - Anniversary | Fashion" footer="16" content={<MDX frontImg={kay_lcd_34_top} backImg={kay_lcd_34_back}/>}/>,

          //Ruby
          <GSIPage3 header="KAY Ruby"/>,
          <DefaultPageLayout header="KAY/Ruby/51 - Ruby Only" footer="18" content={<MDX frontImg={kay_51_top} backImg={back1}/>}/>,
          <DefaultPageLayout header="KAY/Ruby/52 - Ruby + Natural Diamond" footer="19" content={<MDX frontImg={kay_52_top} backImg={kay_52_back}/>}/>,

          // Kay Outlet
          <GSIPage3 header="KAY Outlet Natural"/>,
           // Natural
          <DefaultPageLayout header="KAY Outlet/Natural Diamond/21 - Bridal Reg" footer="21" content={<MDX frontImg={kayo_21_top} backImg={kayo_21_back}/>}/>,
          <DefaultPageLayout header="KAY Outlet/Natural Diamond/22 - Bridal Solitaire" footer="22" content={<MDX frontImg={kayo_22_top} backImg={kayo_22_back}/>}/>,
          <DefaultPageLayout header="KAY Outlet/Natural Diamond/25 - Solitaire Studs | Pendants" footer="23" content={<MDX frontImg={kayo_25_top} backImg={kayo_25_back}/>}/>,
          <DefaultPageLayout header="KAY Outlet/Natural Diamond/34 - Anniversary | Fashion" footer="24" content={<MDX frontImg={kayo_34_top} backImg={kayo_34_back}/>}/>,
          // LCD
          <GSIPage3 header="KAY Outlet LCD"/>,
          <DefaultPageLayout header="KAY Outlet/Lab Created Diamond/21 - Bridal Reg" footer="26" content={<MDX frontImg={kayo_lcd_21_top} backImg={kayo_lcd_21_back}/>}/>,
          <DefaultPageLayout header="KAY Outlet/Lab Created Diamond/25 - Solitaire Studs | Pendants " footer="27" content={<MDX frontImg={kayo_lcd_25_top} backImg={kayo_lcd_25_back}/>}/>,
          <DefaultPageLayout header="KAY Outlet/Lab Created Diamond/34 - Anniversary | Fashion" footer="28" content={<MDX frontImg={kayo_lcd_34_top} backImg={kayo_lcd_34_back}/>}/>,

          //Ruby
          <GSIPage3 header="KAY Outlet Ruby"/>,
          <DefaultPageLayout header="KAY Outlet/Ruby/51 - Ruby Only" footer="30" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
          <DefaultPageLayout header="KAY Outlet/Ruby/52 - Ruby + Natural Diamond" footer="31" content={<MDX frontImg={kayo_ruby_52_top} backImg={kayo_ruby_52_back}/>}/>,
        
        
          // Jared
          <GSIPage3 header="Jared Natural"/>,
              // <DefaultPageLayout header="" footer="5" content={<MDX frontImg={} backImg={}/>}/>,
              <DefaultPageLayout header="Jared/Natural Diamond/21 - Bridal Reg" footer="33" content={<MDX frontImg={j_n_21_top} backImg={j_n_21_back}/>}/>,
              <DefaultPageLayout header="Jared/Natural Diamond/22 - Bridal Solitaire" footer="34" content={<MDX frontImg={j_n_22_top} backImg={j_n_22_back}/>}/>,
              <DefaultPageLayout header="Jared/Natural Diamond/25 - Solitaire Studs | Pendants" footer="35" content={<MDX frontImg={j_n_25_top} backImg={j_n_25_back}/>}/>,
              <DefaultPageLayout header="Jared/Natural Diamond/34 - Anniversary | Fashion" footer="36" content={<MDX frontImg={j_n_34_top} backImg={j_n_34_back}/>}/>,
          <GSIPage3 header="Jared LCD"/>,
              <DefaultPageLayout header="Jared/Lab Created Diamond/21 - Bridal Reg" footer="38" content={<MDX frontImg={j_l_21_top} backImg={j_l_21_back}/>}/>,
              <DefaultPageLayout header="Jared/Lab Created Diamond/31 - Bridal CTR-CTW" footer="39" content={<MDX frontImg={j_l_31_top} backImg={j_l_31_back}/>}/>,
              <DefaultPageLayout header="Jared/Lab Created Diamond/34 - Anniversary | Fashion" footer="40" content={<MDX frontImg={j_l_34_top} backImg={j_l_34_back}/>}/>,
          <GSIPage3 header="Jared Ruby"/>,
              <DefaultPageLayout header="Jared/Ruby/51 - Ruby Only" footer="42" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
              <DefaultPageLayout header="Jared/Ruby/52 - Ruby + Natural Diamond" footer="43" content={<MDX frontImg={kayo_ruby_52_top} backImg={kayo_ruby_52_back}/>}/>,

          // Jared Vault
          <GSIPage3 header="Jared Vault Natural"/>,
              <DefaultPageLayout header="Jared Vault/Natural Diamond/25 - Solitaire Studs | Pendants" footer="45" content={<MDX frontImg={jo_n_25_top} backImg={jo_n_25_back}/>}/>,
          <GSIPage3 header="Jared Vault LCD"/>,
              <DefaultPageLayout header="Jared Vault/Lab Created Diamond/21 - Bridal Reg" footer="47" content={<MDX frontImg={jo_l_21_top} backImg={jo_l_21_back}/>}/>,
          <GSIPage3 header="Jared Vault Ruby"/>,
              <DefaultPageLayout header="Jared Vault/Ruby/51 - Ruby Only" footer="49" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
              <DefaultPageLayout header="Jared Vault/Ruby/52 - Ruby + Natural Diamond" footer="50" content={<MDX frontImg={kayo_ruby_52_top} backImg={kayo_ruby_52_back}/>}/>,
          
          // Peoples
          // Peoples Nat
          <GSIPage3 header="Peoples Natural"/>,
          <DefaultPageLayout header="Peoples/Natural Diamond/21 - Bridal Reg" footer="52" content={<MDX frontImg={p_n_21_top} backImg={p_n_21_back}/>}/>,
          <DefaultPageLayout header="Peoples/Natural Diamond/22 - Bridal Solitaire" footer="53" content={<MDX frontImg={p_n_22_top} backImg={p_n_22_back}/>}/>,
          <DefaultPageLayout header="Peoples/Natural Diamond/23 - 3 Stone Styles" footer="54" content={<MDX frontImg={p_n_23_top} backImg={p_n_23_back}/>}/>,
          <DefaultPageLayout header="Peoples/Natural Diamond/25 - Solitaire Studs | Pendants" footer="55" content={<MDX frontImg={p_n_25_top} backImg={p_n_25_back}/>}/>,
          <DefaultPageLayout header="Peoples/Natural Diamond/26 - Anniversary" footer="56" content={<MDX frontImg={p_n_26_top} backImg={p_n_26_back}/>}/>,
          <DefaultPageLayout header="Peoples/Natural Diamond/27 - Fashion" footer="57" content={<MDX frontImg={p_n_27_top} backImg={p_n_27_back}/>}/>,
          // Peoples LCD
          <GSIPage3 header="Peoples LCD"/>,
          <DefaultPageLayout header="Peoples/Lab Created Diamond/31 - Bridal CTR-CTW" footer="59" content={<MDX frontImg={p_l_31_top} backImg={p_l_31_back}/>}/>,
          <DefaultPageLayout header="Peoples/Lab Created Diamond/34 - Anniversary | Fashion" footer="60" content={<MDX frontImg={p_l_34_top} backImg={p_l_34_top}/>}/>,

          // Peoples Ruby
          <GSIPage3 header="Peoples Ruby"/>,
          <DefaultPageLayout header="Peoples/Ruby/51 - Ruby Only" footer="62" content={<MDX frontImg={p_r_51_top} backImg={p_r_51_back}/>}/>,
          <DefaultPageLayout header="Peoples/Ruby/54 - Ruby + Natural Diamond" footer="63" content={<MDX frontImg={p_r_54_top} backImg={p_r_54_top}/>}/>,

          // Zales
          // Zales Nat
          <GSIPage3 header="Zales Natural"/>,
          <DefaultPageLayout header="Zales/Natural Diamond/21 - Bridal Reg" footer="65" content={<MDX frontImg={z_n_21_top} backImg={z_n_21_back}/>}/>,
          <DefaultPageLayout header="Zales/Natural Diamond/22 - Bridal Solitaire" footer="66" content={<MDX frontImg={z_n_22_top} backImg={z_n_22_back}/>}/>,
          <DefaultPageLayout header="Zales/Natural Diamond/23 - 3 Stone Style" footer="67" content={<MDX frontImg={z_n_23_top} backImg={z_n_23_back}/>}/>,
          <DefaultPageLayout header="Zales/Natural Diamond/25 - Solitaire Studs | Pendants" footer="68" content={<MDX frontImg={z_n_25_top} backImg={z_n_25_back}/>}/>,
          <DefaultPageLayout header="Zales/Natural Diamond/26 - Anniversary" footer="69" content={<MDX frontImg={z_n_26_top} backImg={z_n_26_top}/>}/>,
          <DefaultPageLayout header="Zales/Natural Diamond/27 - Fashion" footer="70" content={<MDX frontImg={z_n_27_top} backImg={z_n_27_back}/>}/>,
          <DefaultPageLayout header="Zales/Natural Diamond/28 - Color Diamond" footer="71" content={<MDX frontImg={z_n_28_top} backImg={z_n_28_back}/>}/>,

          
          // Zales LCd
          <GSIPage3 header="Zales LCD"/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/21 - Bridal Reg" footer="73" content={<MDX frontImg={z_l_21_top} backImg={z_l_21_top}/>}/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/22 - Bridal Solitaire" footer="74" content={<MDX frontImg={z_l_22_top} backImg={z_l_22_top}/>}/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/23 - 3 Stone Style" footer="75" content={<MDX frontImg={z_l_23_top} backImg={z_l_23_back}/>}/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/24 - 2 Stone Style" footer="76" content={<MDX frontImg={z_l_24_top} backImg={z_l_24_back}/>}/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/25 - Solitaire Studs | Pendants" footer="77" content={<MDX frontImg={z_l_25_top} backImg={z_l_25_top}/>}/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/31 - Bridal CTR-CTW" footer="78" content={<MDX frontImg={z_l_31_top} backImg={z_l_31_back}/>}/>,
          <DefaultPageLayout header="Zales/Lab Creatd Diamond/34 - Anniversary | Fashion" footer="79" content={<MDX frontImg={z_l_34_top} backImg={z_l_34_top}/>}/>,

          // Zales Ruby
          <GSIPage3 header="Zales Ruby"/>,
          <DefaultPageLayout header="Zales/Ruby/51 - Ruby Only" footer="81" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
          <DefaultPageLayout header="Zales/Ruby/52 - Ruby + Natural Diamond" footer="82" content={<MDX frontImg={z_r_52_top} backImg={z_r_52_back}/>}/>,


          // Zales Outlet
          // Zales Outlet Nat
          <GSIPage3 header="Zales Outlet Natural"/>,
          <DefaultPageLayout header="Zales Outlet/Natural Diamond/22 - Bridal Solitaire" footer="84" content={<MDX frontImg={zo_n_22_top} backImg={zo_n_22_back}/>}/>,
          <DefaultPageLayout header="Zales Outlet/Natural Diamond/Solitaire Studs | Pendants" footer="85" content={<MDX frontImg={zo_n_25_top} backImg={zo_n_25_back}/>}/>,


          // Zales Outlet LCd
          <GSIPage3 header="Zales Outlet LCD"/>,
          <DefaultPageLayout header="Zales Outlet/Lab Created Diamond/21 - Bridal Reg" footer="87" content={<MDX frontImg={zo_l_21_top} backImg={zo_l_21_top}/>}/>,


          // Zales Outlet Ruby
          <GSIPage3 header="Zales Outlet Ruby"/>,
          <DefaultPageLayout header="Zales Outlet/Ruby/51 - Ruby Only" footer="89" content={<MDX frontImg={zo_r_51_top} backImg={zo_r_51_top}/>}/>,
          <DefaultPageLayout header="Zales Outlet/Ruby/52 - Ruby + Natural Diamond" footer="90" content={<MDX frontImg={zo_r_52_top} backImg={zo_r_52_back}/>}/>,

      
              




        <DefaultPageLayout header="End Of Book" footer="91"/>,
        
   ])
   
   const toggleSideBar = () => {
    setIsSideBarOpen(!isSidebarOpen)
   }
   


    return ( 
      <div>
        <div style={{position: 'absolute', left: 0, top: '50%'}}>
          { isSidebarOpen ? <Sidebar sharedState={isSidebarOpen} setSharedState={setIsSideBarOpen} /> :  <button onClick={toggleSideBar} >
            <img alt="open arrow" src={openside} width="30px" height="30px"/>
          </button>}
         
        </div>
        
        <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='view-point'>
            <div className='flip-book' style={{ backgroundImage: `url\(${pageCover})` }}>
            
              <HTMLFlipBook width={600} height={800} ref={bookRef}
                          showCover={true}
                          mobileScrollSupport={true}
                          useMouseEvents={false}
                          onFlip={onFlip}>
      
              {bookPages.map((page, index) => React.cloneElement(page, { key: index }))}

              </HTMLFlipBook>
            </div>
            <BookControls bookRef={bookRef} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
      
    )
  }
export default MyBook