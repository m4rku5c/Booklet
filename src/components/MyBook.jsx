import React, {useRef, useState, useCallback} from 'react'
import HTMLFlipBook from "react-pageflip"

import '../styles/book.css'
import '../styles/main-container.css'

import DefaultPageLayout from '../pages/DefaultPage'
import DefaultPageLayout2 from '../pages/DefaultPage2'
import BookControls from './BookControls'
import TableOfContents from '../pages/TableOfContents'

import GSIPage from '../pages/GSIPage'
import GSIPage2 from '../pages/GSIPage2'
import GSIPage3 from '../pages/GSIPage3'
import signet from '../../public/assets/signet.png'

import MDX from '../cards/MDX'
import MDX2 from '../cards/MDX2'

import Pricing from './Pricing'

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

import kkt from '../../public/assets/booklet/Kay/Natural/kkt.png'
import kkb from '../../public/assets/booklet/Kay/Natural/kkb.png'

import kkst from '../../public/assets/booklet/Kay/Natural/kkst.png'
import kkpt from '../../public/assets/booklet/Kay/Natural/kkpt.png'

import whitetag from '../../public/assets/a.png'
import rattail from '../../public/assets/rattail.png'

import leowt from '../../public/assets/leowt.png'

import bluetag from '../../public/assets/bluetag.png'
import bluetail from '../../public/assets/bluetail.png'

import Details from './Details'
import Details2 from './Details2'
import Details3 from './Details3'

import kaylogo from '../../public/assets/kay.png'

import kanvtop from '../../public/assets/booklet/Kay/natural/k-anv-top.png'
import kanvback from '../../public/assets/booklet/Kay/natural/k-anv-back.png'

import kn3stonetop from '../../public/assets/booklet/Kay/natural/kn3stone-top.png'
import kn3stoneback from '../../public/assets/booklet/Kay/natural/kn3stone-back.png'

import knfashtop from '../../public/assets/booklet/Kay/natural/k-nfash-top.png'
import knfashback from '../../public/assets/booklet/Kay/natural/k-nfash-back.png'

/////////////////////////////////////////////////////////////////////////////////

import klcd21top from '../../public/assets/booklet/Kay/lcd/klcd21top.png'
import klcd21back from '../../public/assets/booklet/Kay/lcd/klcd21back.png'

import klcd22top from '../../public/assets/booklet/Kay/lcd/klcd22top.png'
import klcd22back from '../../public/assets/booklet/Kay/lcd/klcd22back.png'

import klcd23top from '../../public/assets/booklet/Kay/lcd/klcd23top.png'
import klcd23back from '../../public/assets/booklet/Kay/lcd/klcd23back.png'

import klcd24top from '../../public/assets/booklet/Kay/lcd/klcd24top.png'
import klcd24back from '../../public/assets/booklet/Kay/lcd/klcd24back.png'

import klcd25top from '../../public/assets/booklet/Kay/lcd/klcd25top.png'
import klcd25back from '../../public/assets/booklet/Kay/lcd/klcd25back.png'

import klcd26top from '../../public/assets/booklet/Kay/lcd/klcd26top.png'
import klcd26back from '../../public/assets/booklet/Kay/lcd/klcd26back.png'

import klcd31top from '../../public/assets/booklet/Kay/lcd/klcd31top.png'

import klcd32top from '../../public/assets/booklet/Kay/lcd/klcd32top.png'
import klcd32back from '../../public/assets/booklet/Kay/lcd/klcd32back.png'

import klcd331top from '../../public/assets/booklet/Kay/LCD/klcd331top.png'
import klcd331back from '../../public/assets/booklet/Kay/LCD/klcd331back.png'
import klcd332top from '../../public/assets/booklet/Kay/LCD/klcd353top.png'
import klcd332back from '../../public/assets/booklet/Kay/LCD/klcd353back.png'

import klcd34top from '../../public/assets/booklet/Kay/lcd/klcd34top.png'
import klcd34back from '../../public/assets/booklet/Kay/lcd/klcd34back.png'

import klcd351top from '../../public/assets/booklet/Kay/LCD/klcd351top.png'
import klcd351back from '../../public/assets/booklet/Kay/LCD/klcd351back.png'
import klcd352top from '../../public/assets/booklet/Kay/LCD/klcd352top.png'
import klcd352back from '../../public/assets/booklet/Kay/LCD/klcd352back.png'
import klcd353top from '../../public/assets/booklet/Kay/LCD/klcd353top.png'
import klcd353back from '../../public/assets/booklet/Kay/LCD/klcd353back.png'

//branded

import naf_21_top from '../../public/assets/booklet/Kay/B/naf_21_top.png'
import naf_nat_back from '../../public/assets/booklet/Kay/B/naf_nat_back.png'
import naf_lcd_21_top from '../../public/assets/booklet/Kay/B/naf_lcd_21_top.png'
import naf_lcd_back from '../../public/assets/booklet/Kay/B/naf_lcd_back.png'
import mmm_back from '../../public/assets/booklet/Kay/B/mmm_back.png'
import mmm_23_top from '../../public/assets/booklet/Kay/B/mmm_23_top.png'
import mmm_lcd_23_top from '../../public/assets/booklet/Kay/B/mmm_lcd_23_top.png'

import naf_34_top from '../../public/assets/booklet/Kay/B/naf_34_top.png'
import naf_lcd_34_top from '../../public/assets/booklet/Kay/B/naf_lcd_34_top.png'
import naf_lcd_31_top from '../../public/assets/booklet/Kay/B/naf_lcd_31_top.png'

import leoideal_21_top from '../../public/assets/booklet/Kay/B/leoideal/leoideal_21_top.png'
import leoideal_21_top_2 from '../../public/assets/booklet/Kay/B/leoideal/leoideal_21_top_2.png'
import leoideal_22_top from '../../public/assets/booklet/Kay/B/leoideal/leoideal_22_top.png'
import leoideal_22_top_2 from '../../public/assets/booklet/Kay/B/leoideal/leoideal_22_top_2.png'
import leoideal_23_top from '../../public/assets/booklet/Kay/B/leoideal/leoideal_23_top.png'
import leoideal_23_top_2 from '../../public/assets/booklet/Kay/B/leoideal/leoideal_23_top_2.png'

import leoideal_34_35_top from '../../public/assets/booklet/Kay/B/leoideal/leoideal_34_35_top.png'

import leoideal_back from '../../public/assets/booklet/Kay/B/leoideal/leoideal_back.png'

import k_ruby_top from '../../public/assets/booklet/Kay/Ruby/k_ruby_top.png'
import k_ruby_back from '../../public/assets/booklet/Kay/Ruby/k_ruby_back.png'

import mini_min_top from '../../public/assets/booklet/Kay/LCD/mini_min_top.png'
import mini_min_back from '../../public/assets/booklet/Kay/LCD/mini_min_back.png'



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
    console.log('Current page: ' + (e.data + 1));
    setCurrentPage(e.data + 1)
    //console.log("price menu: ", priceMenu[0].p1)
}, []);

  const priceMenu = [
    {
      p1: "$ 8.55",
      p2: "$ 9.50",
      p3: "$ 9.50",
      p4: "$ 11.90",
      p5: "$ 12.11",
      p6: "$ 14.11",
      p7: "$ 20.19",
      p8: "$ 22.19",
      p9: "$ 25.84",
      p10: "$ 28.26",
      p11: "$ 32.49",
      p12: "$ 37.36",
      p13: "$ 42.96",
      p14: "$ 49.40",
      p15: "$ 56.81",
    }, 
    {
      p1: "$ 10.55",
      p2: "$ 11.69",
      p3: "$ 13.18",
      p4: "$ 15.30",
      p5: "$ 18.96",
      p6: "$ 21.00",
      p7: "$ 27.46",
      p8: "$ 29.50",
      p9: "$ 30.20",
      p10: "$ 33.22",
      p11: "$ 36.54",
      p12: "$ 40.19",
      p13: "$ 44.20",
    }
  ]

  
   
   
   const [bookPages, setBookPages] = useState([
        <GSIPage />,
        <GSIPage2 logo={signet}/>,
        <TableOfContents functionInput={handleGoTo} />,

          <GSIPage2 logo={kaylogo}/>,
          <GSIPage3 header="KAY" header1="Natural Diamond Certification"/>,
            <DefaultPageLayout header='KAY/ Natural Diamond/ Bridal Regular/ Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-21-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={whitetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={kkt} backImg={kkb} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="7" content={<><Details />  </>}/>,

            <DefaultPageLayout header="KAY/ Natural Diamond/ Bridal Solitare/ Full Certification" headerfunc={handleGoTo} footer="8" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-22-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={whitetag}  menuType={'false'} priceMenu={priceMenu[1]} frontImg={kay_natural_22_top} backImg={kkb} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/> }/>,
            // <DefaultPageLayout2 header="Lab Validation Process" footer="9" content={<><Details />  </>}/>,
              <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={1} stoneShape={1} 
              centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
              sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={1} polishSymmetry={1} measurements={1} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Natural Diamond/ 3 Stone Style/ Full Certification" headerfunc={handleGoTo} footer="10" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-23-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={whitetag}  menuType={'true'} priceMenu={priceMenu[0]} frontImg={kn3stonetop} backImg={kn3stoneback} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={1} stoneShape={1} 
              centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
              sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={0} polishSymmetry={1} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,


            <DefaultPageLayout header="KAY/ Natural Diamond/ Solitare Studs/ Full Certification" headerfunc={handleGoTo} footer="12" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-25-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={rattail} menuType={'true'}  priceMenu={priceMenu[0]} frontImg={kkst} backImg={kkb} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={1} stoneShape={1} 
              centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
              sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={0} polishSymmetry={1} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Natural Diamond/ Solitare Pendants/ Full Certification" headerfunc={handleGoTo}  footer="14" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-26-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={rattail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={kkpt} backImg={kkb} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={1} stoneShape={1} 
              centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
              sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={1} polishSymmetry={0} measurements={1} treatments={1} metalTitle={0}/>  </>}/>,

            // min

            // <DefaultPageLayout header="KAY/ Natural Diamond/ Anniversary/ Minimum Certification" footer="16" content={<MDX2 multiMDX={'false'} placePrice={'false'} pricetitle={"Min. Grade Natural Diamond Certification: "} label1={'$10.00 flat fee'} label2={''} label3={''}  subtitle={"K-NAT-34-P"} tail={rattail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={kanvtop} backImg={kanvback} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back}/>}/>,
            // <DefaultPageLayout2 header="Lab Validation Process" footer="17" content={<><Details2 />  </>}/>,

            <DefaultPageLayout header="KAY/ Natural Diamond/ Anniversary/ Minimum Certification" headerfunc={handleGoTo} footer="16" content={<MDX2 multiMDX={'false'} placePrice={'false'} pricetitle={"Min. Grade Natural Diamond Certification: "} label1={'$10.00 flat fee'} label2={''} label3={''}  subtitle={"K-NAT-34-P"} tail={whitetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={kanvtop} backImg={kanvback} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}  />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={1} stoneShape={1} 
              centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
              sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Natural Diamond/ Fashion/ Minimum Certification" headerfunc={handleGoTo} footer="18" content={<MDX2 multiMDX={'false'} placePrice={'false'} pricetitle={"Min. Grade Natural Diamond Certification: "} label1={'$10.00 flat fee'} label2={''} label3={''}  subtitle={"K-NAT-35-P"} tail={whitetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={knfashtop} backImg={knfashback} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,
            
          

          //LCD
          <GSIPage2 logo={kaylogo}/>,
          <GSIPage3 header="KAY" header1="Lab Created Diamond Certification"/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Bridal Regular/ Full Certification" headerfunc={handleGoTo} footer="22" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-21-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'}  label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={klcd21top} backImg={klcd21back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={0} stoneShape={1} 
              centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
              sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Bridal Solitaire/ Full Certification" headerfunc={handleGoTo} footer="24" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-22-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'}  label4={'$1.00 "LCD" only'}  tail={bluetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd22top} backImg={klcd22back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
              {<><Details3 stoneScreening={0} stoneShape={1} 
              centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
              sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
              cutGrade={1} polishSymmetry={1} measurements={1} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ 3 Stone Style/ Full Certification" headerfunc={handleGoTo} footer="26" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-23-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'}  label4={'$1.00 "LCD" only'}  tail={bluetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={klcd23top} backImg={klcd23back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ 2 Stone Style/ Full Certification" headerfunc={handleGoTo} footer="28" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-24-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'}  label4={'$1.00 "LCD" only'} tail={bluetail} menuType={'true'} priceMenu={priceMenu[0]} frontImg={klcd24top} backImg={klcd24back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Solitaire Studs/ Full Certification" headerfunc={handleGoTo} footer="30" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-25-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'}  label4={'$1.00 "LCD" only'} tail={bluetail} menuType={'true'} priceMenu={priceMenu[0]} frontImg={klcd25top} backImg={klcd25back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Solitaire Pendant/ Full Certification" headerfunc={handleGoTo} footer="32" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-26-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'}  label4={'$1.00 "LCD" only'}  tail={bluetail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd26top} backImg={klcd26back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={1} polishSymmetry={0} measurements={1} treatments={0} metalTitle={0}/>  </>}/>,

            

            //min          
            

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Bridal/ Minimum Certification" headerfunc={handleGoTo} footer="34" content={<MDX2 multiMDX={'false'} placePrice={'false'} subtitle={"K-LCD-31-P"}   pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'}  tail={bluetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd31top} backImg={klcd32back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Bridal Solitaire/ Minimum Certification" headerfunc={handleGoTo} footer="36" content={<MDX2 multiMDX={'false'} placePrice={'false'} subtitle={"K-LCD-32-P"} pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd32top} backImg={klcd32back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Solitaire Studs | Pendant/ Minimum Certification" headerfunc={handleGoTo} footer="38" content={<MDX2 multiMDX={'true'} placePrice={'false'} subtitle={"K-LCD-33-P"} pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'}  tail={bluetail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd331top} backImg={klcd331back} frontImg2={klcd332top} backImg2={klcd332back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,


            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Anniversary/ Minimum Certification" headerfunc={handleGoTo} footer="40" content={<MDX2 multiMDX={'false'} placePrice={'false'} pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd34top} backImg={klcd34back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Fashion/ Minimum Certification" headerfunc={handleGoTo} footer="42" content={<MDX2 multiMDX={'true'} placePrice={'false'} subtitle={"K-LCD-35-P"} pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'}  tail={bluetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={klcd351top} backImg={klcd351back} frontImg2={klcd352top} backImg2={klcd352back} frontImg3={klcd353top} backImg3={klcd353back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header="KAY/ Lab Created Diamond/ Mini Minimum/ Minimum Certification" headerfunc={handleGoTo} footer="32" content={<MDX2 multiMDX={'false'} placePrice={'false'} subtitle={"K-LCD-36-E"} pricetitle={"$2.00 flat fee"} label1={'Laser Inscription Price:'} label2={'$1.00 "LCD" only'}   tail={bluetail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={mini_min_top} backImg={mini_min_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,




          // <DefaultPageLayout header="KAY/Lab Created Diamond/21 - Bridal Reg" footer="10" content={<MDX frontImg={kay_lcd_21_top} backImg={kay_lcd_21_back}/>}/>,
          // <DefaultPageLayout header="KAY/Lab Created Diamond/23 - 3 Stone Style" footer="11" content={<MDX frontImg={kay_lcd_23_top} backImg={kay_lcd_23_back}/>}/>,
          // <DefaultPageLayout header="KAY/Lab Created Diamond/24 - 2 Stone Style" footer="12" content={<MDX frontImg={kay_lcd_24_top} backImg={kay_lcd_24_back}/>}/>,
          // <DefaultPageLayout header="KAY/Lab Created Diamond/25 - Solitaire Studs | Pendants " footer="13" content={<MDX frontImg={kay_lcd_25_top} backImg={kay_lcd_25_back}/>}/>,
          // <DefaultPageLayout header="KAY/Lab Created Diamond/31 - Bridal CTR-CTW" footer="14" content={<MDX frontImg={kay_lcd_31_top} backImg={kay_lcd_31_back}/>}/>,
          // <DefaultPageLayout header="KAY/Lab Created Diamond/33 - Solitaire Studs | Pendants" footer="15" content={<MDX frontImg={kay_lcd_33_top} backImg={kay_lcd_33_back}/>}/>,
          // <DefaultPageLayout header="KAY/Lab Created Diamond/34 - Anniversary | Fashion" footer="16" content={<MDX frontImg={kay_lcd_34_top} backImg={kay_lcd_34_back}/>}/>,

          //Ruby
          <GSIPage2 logo={kaylogo}/>,
          <GSIPage3 header="KAY" header1="Ruby Certification"/>,
            // <DefaultPageLayout header="KAY/Ruby/51 - Ruby Only" headerfunc={handleGoTo} footer="46" content={<MDX frontImg={kay_51_top} backImg={back1}/>}/>,
            // <DefaultPageLayout header="KAY/Ruby/52 - Ruby + Natural Diamond" footer="47" content={<MDX frontImg={kay_52_top} backImg={kay_52_back}/>}/>,

            <DefaultPageLayout header="KAY/ Ruby/ Ruby & Natural Diamond" headerfunc={handleGoTo} footer="32" content={<MDX2 multiMDX={'false'} placePrice={'false'} subtitle={"K-RUB"} pricetitle={'Ruby Certification Price:'} label1={"1-5 rubies $5 (plus $1 for diamond if applicable)"} label2={'6-10 rubies $6 (plus $1 for diamond if applicable)'} label3={'11-15 rubies $7  (plus $1 for diamond if applicable)'} label4={'16-20 rubies $8 (plus $1 for diamond if applicable)'}  tail={rattail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={kay_52_top} backImg={kay_52_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={0} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,

            // <DefaultPageLayout header="KAY/ Ruby/  " headerfunc={handleGoTo} footer="42" content={
            //               <MDX2 multiMDX={'false'} 
            //               placePrice={'false'} 
            //               subtitle={"K-LCD-52-E"} 
            //               label1={'$3.50 flat fee'} 
            //               label2={'Up to 6ct twt $3.50'} 
            //               label3={'6ct twt and higher $7.00'} 
            //               label4={'Laser Inscription Price:'} 
            //               pricetitle={'Min. Grade Lab Created Diamond Certification'} 
            //               label5={'$1.00 "LCD" only'}  
            //               tail={whitetag} 
            //               menuType={'false'} 
            //               priceMenu={priceMenu[1]} frontImg={k_ruby_top} backImg={k_ruby_back}/>}/>,
            // <DefaultPageLayout2 header="Lab Validation Process" footer="43" content={<><Details />  </>}/>,

          <GSIPage2 logo={kaylogo}/>,
          <GSIPage3 header="KAY" header1="Branded Certification"/>,

            // Now and Forever

            <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ Natural Bridal Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-21-NF-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={whitetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={naf_21_top} backImg={naf_nat_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={1} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={1} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ Natural Anniversary Minimum Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-34-NF-P"} placePrice={'false'} pricetitle={"Min. Grade Natural Diamond Certification: "} label1={'$10.00 flat fee'}  tail={whitetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={naf_34_top} backImg={naf_nat_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ Lab Created Bridal Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-21-NF-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={naf_lcd_21_top} backImg={naf_lcd_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,
            // <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ Natural 3 stone Style Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-23-NF-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={whitetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={mmm_23_top} backImg={mmm_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back}/>}/>,
            // <DefaultPageLayout2 header="Lab Validation Process" footer="7" content={<><Details />  </>}/>,

            // <DefaultPageLayout header='KAY/ Branded/ Memories Moments Magic/ Lab Created  3 Stone Style Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-23-MM-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={mmm_lcd_23_top} backImg={mmm_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back}/>}/>,
            // <DefaultPageLayout2 header="Lab Validation Process" footer="7" content={<><Details />  </>}/>,

            // <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ Natural Anniversary Minimum Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-34-NF-P"} placePrice={'false'} pricetitle={"Min. Grade Natural Diamond Certification: "} label1={'$10.00 flat fee'}  tail={bluetail} menuType={'false'} priceMenu={priceMenu[1]} frontImg={naf_34_top} backImg={naf_nat_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back}/>}/>,
            // <DefaultPageLayout2 header="Lab Validation Process" footer="7" content={<><Details />  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ LCD Anniversary Minimum Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-34-NF-P"} placePrice={'false'} pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'false'} priceMenu={priceMenu[0]} frontImg={naf_lcd_34_top} backImg={naf_lcd_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}/>}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={0} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={0} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Now and Forever/ LCD Bridal Minimum Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-31-NF-P"} placePrice={'false'} pricetitle={'Min. Grade Lab Created Diamond Certification'} label1={'$3.50 up to 6ct twt'} label2={'$7.00 for 6ct twt and larger'} label3={'Laser Inscription Price:'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'false'} priceMenu={priceMenu[1]} frontImg={naf_lcd_31_top} backImg={naf_lcd_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            // MMM 

            <DefaultPageLayout header='KAY/ Branded/ Memories Moments Magic/ Lab Created  3 Stone Style Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-LCD-23-MM-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} label4={'$1.00 "LCD" only'} tail={bluetag} menuType={'true'} priceMenu={priceMenu[0]} frontImg={mmm_lcd_23_top} backImg={mmm_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} frontImg3={kay_natural_25_top} backImg3={kay_natural_25_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={0} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={0} polishSymmetry={1} measurements={0} treatments={0} metalTitle={0}/>  </>}/>,

            // Leo Ideal

            <DefaultPageLayout header='KAY/ Branded/ Leo Ideal/ Natural Bridal Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'true'} subtitle={"K-NAT-21-LI-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={leowt} menuType={'true'} priceMenu={priceMenu[0]} frontImg={leoideal_21_top_2} backImg={leoideal_back} frontImg2={leoideal_21_top} backImg2={leoideal_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={1} polishSymmetry={1} measurements={1} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Leo Ideal/ Natural Soliatire Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'true'} subtitle={"K-NAT-LI-22-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={leowt} menuType={'false'} priceMenu={priceMenu[1]} frontImg={leoideal_22_top} backImg={leoideal_back} frontImg2={leoideal_22_top_2} backImg2={leoideal_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={0} sideStoneMinClarity={0} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={1} polishSymmetry={1} measurements={1} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Leo Ideal/ Natural 3 Stone Style Full Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'true'} subtitle={"K-NAT-LI-23-P"} pricetitle={"Laser Inscription Price:"} label1={'$5.00 Per Stone'} label2={'$9.00 Studs / 2 Stone'} label3={'$13.00 3 Stone'} tail={leowt} menuType={'true'} priceMenu={priceMenu[0]} frontImg={leoideal_23_top} backImg={leoideal_back} frontImg2={leoideal_23_top_2} backImg2={leoideal_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} pi5={'Diamond(s) Laser Inscripton - GSI #'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={1} centerStoneActualClarity={1} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={1} polishSymmetry={1} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Leo Ideal/ Natural Anniversary Minimum Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-LI-34-P"} pricetitle={"Min. Grade Natural Diamond Certification: "} placePrice={'false'} label1={'$10.00 flat fee'} tail={leowt} menuType={'false'} priceMenu={priceMenu[0]} frontImg={leoideal_34_35_top} backImg={leoideal_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'}  />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={1} polishSymmetry={1} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,

            <DefaultPageLayout header='KAY/ Branded/ Leo Ideal/ Natural Fashion Minimum Certification' headerfunc={handleGoTo} footer="1" content={<MDX2 multiMDX={'false'} subtitle={"K-NAT-LI-35-P"} pricetitle={"Min. Grade Natural Diamond Certification: "} placePrice={'false'} label1={'$10.00 flat fee'} tail={leowt} menuType={'false'} priceMenu={priceMenu[0]} frontImg={leoideal_34_35_top} backImg={leoideal_back} frontImg2={kay_natural_22_top} backImg2={kay_natural_22_back} pi1={'E-Cert'} pi2={'Cert Card'} pi3={'Cert Sleeve'} pi4={'QR Code Tag'} />}/>,
            <DefaultPageLayout2 header="Lab Validation Process" footer="9" content=
            {<><Details3 stoneScreening={1} stoneShape={1} 
            centerStoneActualColor={0} centerStoneActualClarity={0} centerStoneActualCarat={1} 
            sideStoneMinColor={1} sideStoneMinClarity={1} sideStoneMinCarat={0} minTotalCarat={0} 
            cutGrade={1} polishSymmetry={1} measurements={0} treatments={1} metalTitle={0}/>  </>}/>,



            


          // Kay Outlet
          // <GSIPage3 header="KAY Outlet Natural"/>,
          //  // Natural
          // <DefaultPageLayout header="KAY Outlet/Natural Diamond/21 - Bridal Reg" footer="21" content={<MDX frontImg={kayo_21_top} backImg={kayo_21_back}/>}/>,
          // <DefaultPageLayout header="KAY Outlet/Natural Diamond/22 - Bridal Solitaire" footer="22" content={<MDX frontImg={kayo_22_top} backImg={kayo_22_back}/>}/>,
          // <DefaultPageLayout header="KAY Outlet/Natural Diamond/25 - Solitaire Studs | Pendants" footer="23" content={<MDX frontImg={kayo_25_top} backImg={kayo_25_back}/>}/>,
          // <DefaultPageLayout header="KAY Outlet/Natural Diamond/34 - Anniversary | Fashion" footer="24" content={<MDX frontImg={kayo_34_top} backImg={kayo_34_back}/>}/>,
          // // LCD
          // <GSIPage3 header="KAY Outlet LCD"/>,
          // <DefaultPageLayout header="KAY Outlet/Lab Created Diamond/21 - Bridal Reg" footer="26" content={<MDX frontImg={kayo_lcd_21_top} backImg={kayo_lcd_21_back}/>}/>,
          // <DefaultPageLayout header="KAY Outlet/Lab Created Diamond/25 - Solitaire Studs | Pendants " footer="27" content={<MDX frontImg={kayo_lcd_25_top} backImg={kayo_lcd_25_back}/>}/>,
          // <DefaultPageLayout header="KAY Outlet/Lab Created Diamond/34 - Anniversary | Fashion" footer="28" content={<MDX frontImg={kayo_lcd_34_top} backImg={kayo_lcd_34_back}/>}/>,

          // //Ruby
          // <GSIPage3 header="KAY Outlet Ruby"/>,
          // <DefaultPageLayout header="KAY Outlet/Ruby/51 - Ruby Only" footer="30" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
          // <DefaultPageLayout header="KAY Outlet/Ruby/52 - Ruby + Natural Diamond" footer="31" content={<MDX frontImg={kayo_ruby_52_top} backImg={kayo_ruby_52_back}/>}/>,
        
        
          // // Jared
          // <GSIPage3 header="Jared Natural"/>,
          //     // <DefaultPageLayout header="" footer="5" content={<MDX frontImg={} backImg={}/>}/>,
          //     <DefaultPageLayout header="Jared/Natural Diamond/21 - Bridal Reg" footer="33" content={<MDX frontImg={j_n_21_top} backImg={j_n_21_back}/>}/>,
          //     <DefaultPageLayout header="Jared/Natural Diamond/22 - Bridal Solitaire" footer="34" content={<MDX frontImg={j_n_22_top} backImg={j_n_22_back}/>}/>,
          //     <DefaultPageLayout header="Jared/Natural Diamond/25 - Solitaire Studs | Pendants" footer="35" content={<MDX frontImg={j_n_25_top} backImg={j_n_25_back}/>}/>,
          //     <DefaultPageLayout header="Jared/Natural Diamond/34 - Anniversary | Fashion" footer="36" content={<MDX frontImg={j_n_34_top} backImg={j_n_34_back}/>}/>,
          // <GSIPage3 header="Jared LCD"/>,
          //     <DefaultPageLayout header="Jared/Lab Created Diamond/21 - Bridal Reg" footer="38" content={<MDX frontImg={j_l_21_top} backImg={j_l_21_back}/>}/>,
          //     <DefaultPageLayout header="Jared/Lab Created Diamond/31 - Bridal CTR-CTW" footer="39" content={<MDX frontImg={j_l_31_top} backImg={j_l_31_back}/>}/>,
          //     <DefaultPageLayout header="Jared/Lab Created Diamond/34 - Anniversary | Fashion" footer="40" content={<MDX frontImg={j_l_34_top} backImg={j_l_34_back}/>}/>,
          // <GSIPage3 header="Jared Ruby"/>,
          //     <DefaultPageLayout header="Jared/Ruby/51 - Ruby Only" footer="42" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
          //     <DefaultPageLayout header="Jared/Ruby/52 - Ruby + Natural Diamond" footer="43" content={<MDX frontImg={kayo_ruby_52_top} backImg={kayo_ruby_52_back}/>}/>,

          // // Jared Vault
          // <GSIPage3 header="Jared Vault Natural"/>,
          //     <DefaultPageLayout header="Jared Vault/Natural Diamond/25 - Solitaire Studs | Pendants" footer="45" content={<MDX frontImg={jo_n_25_top} backImg={jo_n_25_back}/>}/>,
          // <GSIPage3 header="Jared Vault LCD"/>,
          //     <DefaultPageLayout header="Jared Vault/Lab Created Diamond/21 - Bridal Reg" footer="47" content={<MDX frontImg={jo_l_21_top} backImg={jo_l_21_back}/>}/>,
          // <GSIPage3 header="Jared Vault Ruby"/>,
          //     <DefaultPageLayout header="Jared Vault/Ruby/51 - Ruby Only" footer="49" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
          //     <DefaultPageLayout header="Jared Vault/Ruby/52 - Ruby + Natural Diamond" footer="50" content={<MDX frontImg={kayo_ruby_52_top} backImg={kayo_ruby_52_back}/>}/>,
          
          // // Peoples
          // // Peoples Nat
          // <GSIPage3 header="Peoples Natural"/>,
          // <DefaultPageLayout header="Peoples/Natural Diamond/21 - Bridal Reg" footer="52" content={<MDX frontImg={p_n_21_top} backImg={p_n_21_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Natural Diamond/22 - Bridal Solitaire" footer="53" content={<MDX frontImg={p_n_22_top} backImg={p_n_22_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Natural Diamond/23 - 3 Stone Styles" footer="54" content={<MDX frontImg={p_n_23_top} backImg={p_n_23_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Natural Diamond/25 - Solitaire Studs | Pendants" footer="55" content={<MDX frontImg={p_n_25_top} backImg={p_n_25_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Natural Diamond/26 - Anniversary" footer="56" content={<MDX frontImg={p_n_26_top} backImg={p_n_26_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Natural Diamond/27 - Fashion" footer="57" content={<MDX frontImg={p_n_27_top} backImg={p_n_27_back}/>}/>,
          // // Peoples LCD
          // <GSIPage3 header="Peoples LCD"/>,
          // <DefaultPageLayout header="Peoples/Lab Created Diamond/31 - Bridal CTR-CTW" footer="59" content={<MDX frontImg={p_l_31_top} backImg={p_l_31_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Lab Created Diamond/34 - Anniversary | Fashion" footer="60" content={<MDX frontImg={p_l_34_top} backImg={p_l_34_top}/>}/>,

          // // Peoples Ruby
          // <GSIPage3 header="Peoples Ruby"/>,
          // <DefaultPageLayout header="Peoples/Ruby/51 - Ruby Only" footer="62" content={<MDX frontImg={p_r_51_top} backImg={p_r_51_back}/>}/>,
          // <DefaultPageLayout header="Peoples/Ruby/54 - Ruby + Natural Diamond" footer="63" content={<MDX frontImg={p_r_54_top} backImg={p_r_54_top}/>}/>,

          // // Zales
          // // Zales Nat
          // <GSIPage3 header="Zales Natural"/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/21 - Bridal Reg" footer="65" content={<MDX frontImg={z_n_21_top} backImg={z_n_21_back}/>}/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/22 - Bridal Solitaire" footer="66" content={<MDX frontImg={z_n_22_top} backImg={z_n_22_back}/>}/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/23 - 3 Stone Style" footer="67" content={<MDX frontImg={z_n_23_top} backImg={z_n_23_back}/>}/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/25 - Solitaire Studs | Pendants" footer="68" content={<MDX frontImg={z_n_25_top} backImg={z_n_25_back}/>}/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/26 - Anniversary" footer="69" content={<MDX frontImg={z_n_26_top} backImg={z_n_26_top}/>}/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/27 - Fashion" footer="70" content={<MDX frontImg={z_n_27_top} backImg={z_n_27_back}/>}/>,
          // <DefaultPageLayout header="Zales/Natural Diamond/28 - Color Diamond" footer="71" content={<MDX frontImg={z_n_28_top} backImg={z_n_28_back}/>}/>,

          
          // // Zales LCd
          // <GSIPage3 header="Zales LCD"/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/21 - Bridal Reg" footer="73" content={<MDX frontImg={z_l_21_top} backImg={z_l_21_top}/>}/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/22 - Bridal Solitaire" footer="74" content={<MDX frontImg={z_l_22_top} backImg={z_l_22_top}/>}/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/23 - 3 Stone Style" footer="75" content={<MDX frontImg={z_l_23_top} backImg={z_l_23_back}/>}/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/24 - 2 Stone Style" footer="76" content={<MDX frontImg={z_l_24_top} backImg={z_l_24_back}/>}/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/25 - Solitaire Studs | Pendants" footer="77" content={<MDX frontImg={z_l_25_top} backImg={z_l_25_top}/>}/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/31 - Bridal CTR-CTW" footer="78" content={<MDX frontImg={z_l_31_top} backImg={z_l_31_back}/>}/>,
          // <DefaultPageLayout header="Zales/Lab Creatd Diamond/34 - Anniversary | Fashion" footer="79" content={<MDX frontImg={z_l_34_top} backImg={z_l_34_top}/>}/>,

          // // Zales Ruby
          // <GSIPage3 header="Zales Ruby"/>,
          // <DefaultPageLayout header="Zales/Ruby/51 - Ruby Only" footer="81" content={<MDX frontImg={kayo_ruby_51_top} backImg={kayo_ruby_51_top}/>}/>,
          // <DefaultPageLayout header="Zales/Ruby/52 - Ruby + Natural Diamond" footer="82" content={<MDX frontImg={z_r_52_top} backImg={z_r_52_back}/>}/>,


          // // Zales Outlet
          // // Zales Outlet Nat
          // <GSIPage3 header="Zales Outlet Natural"/>,
          // <DefaultPageLayout header="Zales Outlet/Natural Diamond/22 - Bridal Solitaire" footer="84" content={<MDX frontImg={zo_n_22_top} backImg={zo_n_22_back}/>}/>,
          // <DefaultPageLayout header="Zales Outlet/Natural Diamond/Solitaire Studs | Pendants" footer="85" content={<MDX frontImg={zo_n_25_top} backImg={zo_n_25_back}/>}/>,


          // // Zales Outlet LCd
          // <GSIPage3 header="Zales Outlet LCD"/>,
          // <DefaultPageLayout header="Zales Outlet/Lab Created Diamond/21 - Bridal Reg" footer="87" content={<MDX frontImg={zo_l_21_top} backImg={zo_l_21_top}/>}/>,


          // // Zales Outlet Ruby
          // <GSIPage3 header="Zales Outlet Ruby"/>,
          // <DefaultPageLayout header="Zales Outlet/Ruby/51 - Ruby Only" footer="89" content={<MDX frontImg={zo_r_51_top} backImg={zo_r_51_top}/>}/>,
          // <DefaultPageLayout header="Zales Outlet/Ruby/52 - Ruby + Natural Diamond" footer="90" content={<MDX frontImg={zo_r_52_top} backImg={zo_r_52_back}/>}/>,

      
              




        <DefaultPageLayout header="End Of Book" footer="48"/>,
        
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
      
              {/* {bookPages.map((page, index) => React.cloneElement(page, { key: index }))} */}
              {bookPages.map((page, index) =>
            React.isValidElement(page) ? (
                React.cloneElement(page, {
                    key: index + 1, // Ensures unique keys and starts from 1
                    pageIndex: index + 1, // Pass page index as prop
                    footer: page.props.footer ? `${index + 1}` : page.props.footer // Modify footer dynamically
                })
            ) : null
        )}
              </HTMLFlipBook>
            </div>
            <BookControls bookRef={bookRef} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          </div>
        </div>
      </div>
      
    )
  }
export default MyBook