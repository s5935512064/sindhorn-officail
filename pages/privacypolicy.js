import Navbar from "../components/Navbar";
import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
const privacypolicy = () => {
    return (
        <>
            < Navbar />

            <div className="w-full h-full relative flex justify-center pt-28">

                <div className="max-w-7xl w-full h-full px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                    <div className="flex-col flex gap-2 md:sticky md:top-20  h-fit  ">
                        <ul className="gap-1 flex flex-col">
                            <Link
                                activeClass="active"
                                to="unit1"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">1.</span><span className="table-cell">คำนิยาม</span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit2"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">2.</span><span className="table-cell">ข้อมูลส่วนบุคคลประเภทใดบ้างที่บริษัทเก็บรวบรวม </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit3"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">3.</span><span className="table-cell">วิธีการเก็บรวบรวมข้อมูลส่วนบุคคล </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit4"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">4.</span><span className="table-cell">วัตถุประสงค์ในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit5"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">5.</span><span className="table-cell">ผู้ที่อาจได้รับการเปิดเผยข้อมูลส่วนบุคคลของท่าน </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit6"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">6.</span><span className="table-cell">ระยะเวลาในการเก็บข้อมูลส่วนบุคคล </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit7"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">7.</span><span className="table-cell">มาตรการรักษาความปลอดภัยของข้อมูล </span></li>
                            </Link>
                            <Link
                                activeClass="active"
                                to="unit8"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">8.</span><span className="table-cell">วิธีการใช้คุกกี้ </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit9"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">9.</span><span className="table-cell">กล้องวงจรปิด </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit10"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">10.</span><span className="table-cell">ผู้เยาว์ </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit11"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">11.</span><span className="table-cell">ข้อมูลส่วนบุคคลที่รวบรวมก่อนการมีผลบังคับใช้ของ PDPA </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit12"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">12.</span><span className="table-cell">สิทธิของเจ้าของข้อมูล </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit13"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">13.</span><span className="table-cell">ข้อยกเว้นการดูแลรักษาข้อมูลส่วนบุคคล </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit14"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">14.</span><span className="table-cell">การปรับปรุงแก้ไขรายละเอียดเกี่ยวกับนโยบายความเป็นส่วนตัว </span></li>
                            </Link>


                            <Link
                                activeClass="active"
                                to="unit15"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">15.</span><span className="table-cell">เบ็ดเตล็ด </span></li>
                            </Link>



                            <Link
                                activeClass="active"
                                to="unit16"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"> <span className="w-8 table-cell">16.</span><span className="table-cell">ช่องทางการติดต่อ </span></li>
                            </Link>

                            <Link
                                activeClass="active"
                                to="unit17"
                                spy={true}
                                offset={-64}
                                smooth={true}
                                duration={1000}
                            >
                                <li className="w-full py-1 px-2 text-left bg-[#82603f]/10 font-light cursor-pointer"><span className="table-cell">รายละเอียดเว็บไซต์ และช่องทางการติดต่อของบริษัท </span></li>
                            </Link>

                        </ul>



                    </div>

                    <div className="md:col-span-3 w-full h-full relative  text-[#7b7c80] md:pl-5 pb-28 ">
                        <h1 className="font-bold text-2xl md:text-4xl  text-[#82603f] mb-5 text-center">นโยบายความเป็นส่วนตัว <br></br>ของกลุ่มบริษัท สยามสินธร จำกัดและบริษัทในเครือ</h1>
                        <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัท สยามสินธร จำกัด และบริษัทในเครือ ซึ่งรวมถึง (แต่ไม่จำกัดเพียง) บริษัท สินธร เคมปิน จำกัด บริษัท สินธร มาลัย จำกัด บริษัท สินธร จำกัด บริษัท ซูพีเรีย คลีนนิ่ง เซอร์วิสเซส จำกัด บริษัท สินธร ฟู้ด มาร์เก็ต จำกัด บริษัท สินธร เสน่ห์จันทน์ จำกัด บริษัท ไอเฟล คาเฟ่ จำกัด บริษัท สินธร แมเนจเมนท์ จำกัด บริษัท สินธร เรสซิเดนซ์ จำกัด บริษัท บริหารทรัพย์สิน จำกัด บริษัท สยามสินธร แลนด์ จำกัด (&quot;บริษัท&quot;) ได้ตระหนักถึงความสำคัญของการปกป้องข้อมูลส่วนบุคคล โดยบริษัทได้จัดให้มี &quot;นโยบายความเป็นส่วนตัว&quot; เพื่อให้ท่านได้ทราบถึงนโยบายของบริษัทเกี่ยวกับการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล และวิธีการจัดการ รวมถึงมาตรการรักษาความปลอดภัยของข้อมูลส่วนบุคคลอย่างเหมาะสม ซึ่งนโยบายความเป็นส่วนตัวนี้จะนำไปใช้กับทุกท่านที่มีความเกี่ยวข้องกับบริษัทหรือท่านที่บริษัทครอบครองข้อมูลส่วนบุคคลอยู่ ไม่ว่าจะเป็นข้อมูลส่วนบุคคลที่ท่านได้ให้ไว้ผ่านช่องทางของบริษัท ทั้ง Offline และ Online เช่น การเยี่ยมชมโครงการ การเข้าเว็บไซต์ต่างๆ ของบริษัทและโครงการต่างๆ ของบริษัทแอปพลิเคชัน โซเชียลมีเดีย หรือผ่านตัวบุคคล เป็นต้น บริษัทขอขอบคุณที่ท่านให้ความไว้วางใจ และขอให้ท่านมั่นใจได้ว่า บริษัทจะดูแลข้อมูลส่วนบุคคลของท่านด้วยความระมัดระวังและอย่างเหมาะสม เพื่อมอบการบริการอย่างดีที่สุดสำหรับท่าน
                        </p>
                        <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">นโยบายความเป็นส่วนตัวนี้ ครอบคุลมถึงเว็บไซต์ <a href="https://siamsindhorn.com/" target="_blank" rel="noopener noreferrer" className="text-[#82603f]">https://siamsindhorn.com/</a>  และเว็บไซต์ต่างๆ ของบริษัท และโครงการในเครือ รวมถึงแอปพลิเคชัน ช่องทางสื่อสังคมออนไลน์ ช่องทางการสื่อสารออนไลน์ บริการแลกเปลี่ยนคะแนนสะสมและบัตรสมาชิก กิจกรรม ตลอดจนสถานที่อื่นๆ ที่มีการเก็บรวมรวมข้อมูลส่วนบุคคลของท่าน ทั้งนี้ กรุณาอ่านนโยบายความเป็นส่วนตัวนี้ควบคู่กับข้อตกลงและเงื่อนไขสำหรับการใช้บริการที่ท่านใช้ รวมถึงนโยบายคุ้มครองข้อมูลส่วนบุคคลที่บริษัทอาจจะแจ้งเพิ่มเติมบนเว็บไซต์ของบริษัท หรือ ณ เวลาที่บริษัทได้รวบรวมข้อมูลของท่าน และเพื่อให้ท่านได้ทราบ บริษัทขอแจ้งนโยบายความเป็นส่วนตัว ดังนี้
                        </p>
                        <section id="unit1">

                            <h1 className="text-lg  mb-2">1. คำนิยาม </h1>
                            <p className=" break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2"> <span className="font-normal">&quot;ข้อมูลส่วนบุคคล&quot;</span>  หมายถึง ข้อมูลเกี่ยวกับบุคคล ซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ ไม่ว่าทางตรงหรือทางอ้อม
                                แบ่งออกเป็น 2 ประเภท คือ
                            </p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">1.1</span><span className="table-cell">ข้อมูลส่วนบุคคล ยกตัวอย่างเช่น ชื่อ นามสกุล ที่อยู่ Email Address หมายเลขบัตรประจำตัวประชาชน เป็นต้น</span></li>
                                <li> <span className="w-8 table-cell">1.2</span><span className="table-cell">ข้อมูลส่วนบุคคลที่อ่อนไหว ยกตัวอย่างเช่น ข้อมูลที่ต้องได้รับการคุ้มครองเป็นพิเศษ ได้แก่ ข้อมูลส่วนบุคคลเกี่ยวกับเชื้อชาติ ความคิดเห็นทางการเมือง เผ่าพันธุ์ ความพิการ ข้อมูลสหภาพแรงงาน ศาสนา และข้อมูลพันธุกรรม และข้อมูลภาพ เป็น</span></li>


                            </ul>

                            <p className=" break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2"> <span className="font-normal">&quot;คุกกี้(Cookies)&quot;</span>  หมายถึง ข้อมูลที่ได้ส่งจากเว็บไซต์ไปยังเครื่องคอมพิวเตอร์ หรืออุปกรณ์อิเล็กทรอนิกส์ที่เชื่อมต่อกับอินเตอร์เน็ต เพื่อเก็บข้อมูลส่วนบุคคล ในขณะเยี่ยมชม หรือใช้งานเว็บไซต์
                            </p>

                            <p className=" break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2"> <span className="font-normal">&quot;Log&quot;</span>  หมายถึง ข้อมูลที่เกิดจากการใช้งานแอปพลิเคชัน รวมถึงแหล่งกำเนิด ต้นทาง ปลายทาง เส้นทาง วันที่ เวลา ปริมาณ ระยะเวลา ชนิดของบริการ หรืออื่นๆ ที่เกี่ยวข้องกับการใช้งานของแอปพลิเคชัน
                            </p>
                        </section>


                        <section id="unit2">
                            <h1 className="text-lg  mb-2">2. ข้อมูลส่วนบุคคลประเภทใดบ้างที่บริษัทเก็บรวบรวม </h1>
                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">2.1</span><span className="table-cell">บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่าน ไม่ว่าจะโดยทางตรงหรือทางอ้อม ประกอบด้วย</span></li>

                                <li> <span className="w-8 table-cell">(ก)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลส่วนตัว</span> เช่น ชื่อ นามสกุล เพศ อายุ วันเกิด สถานภาพทางการสมรส สถานที่พำนัก อาชีพ ตำแหน่งงาน สถานที่ทำงาน รหัสไปรษณีย์ อีเมล ข้อมูลบนบัตรที่ออกให้โดยรัฐ เช่น เลขบัตรประจำตัวประชาชน เลขหนังสือเดินทาง เลขประจำตัวผู้เสียภาษีอากร เลขหนังสือเดินทาง เป็นต้น รูปถ่าย ภาพจากกล้องวงจรปิด ข้อมูล
                                    บัตรเครดิต/ข้อมูลทางธนาคาร รายได้ส่วนบุคคล ข้อมูลยานพาหนะ และข้อมูลส่วนตัวอื่นๆ ที่ท่านได้มอบให้แก่บริษัท เป็นต้น</span></li>

                                <li> <span className="w-8 table-cell">(ข)</span><span className="table-cell"><span className="font-normal break-all">	ข้อมูลเพื่อการติดต่อ</span> เช่น หมายเลขโทรศัพท์ ที่อยู่ทางไปรษณีย์ อีเมล (e-mail address) ไลน์ไอดี (Line ID) บัญชีผู้ใช้ Facebook บัญชีผู้ใช้เว็บไซต์ในโซเชียลมีเดีย และข้อมูลเพื่อการติดต่ออื่นๆ ที่ท่านได้มอบให้แก่บริษัท เป็นต้น</span></li>

                                <li> <span className="w-8 table-cell">(ค)</span><span className="table-cell"><span className="font-normal break-all">	ข้อมูลส่วนบุคคลกรณีสมัครสมาชิก หรือใช้บริการอย่างใดอย่างหนึ่ง </span> เช่น เพศ อายุ สัญชาติ วันเกิด สถานะภาพการสมรส สิ่งที่ชอบ ความสนใจ เช่น รูปแบบผลิตภัณฑ์และการให้บริการที่สนใจ งานอดิเรก กิจกรรม Social Network ที่ใช้ประจำ ประวัติการซื้อสินค้าและบริการและการตอบรับ เป็นต้น</span></li>


                                <li> <span className="w-8 table-cell">(ง)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลในการตัดสินใจเลือกหรือไม่เลือกผลิตภัณฑ์ และการบริการ</span> เช่น เหตุผลในการตัดสินใจเลือกผลิตภัณฑ์ และบริการ งบประมาณ ข้อมูลการเข้าชมผลิตภัณฑ์ และการบริการ เป็นต้น</span></li>

                                <li> <span className="w-8 table-cell">(จ)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลที่ท่านให้กับบริษัท</span> เช่น ข้อมูลในการกรอกแบบฟอร์ม หรือข้อมูลจากการตอบคำถามระหว่างการสนทนา หรือในการทำแบบสำรวจ หรือข้อมูลเพื่อเข้าร่วมโปรโมชั่น งานแสดงสินค้า หรือกิจกรรมใดๆ ที่เกี่ยวข้องกับธุรกิจของบริษัท เป็นต้น</span></li>


                                <li> <span className="w-8 table-cell">(ฉ)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลเกี่ยวกับพฤติกรรมการสืบค้นข้อมูลในเว็บไซต์และการใช้งานแอปพลิเคชัน</span> โดยบริษัทมีสิทธิใช้คุกกี้ (Cookies) เป็นเครื่องมือในการรวบรวมข้อมูลส่วนบุคคล เช่น หมายเลขไอพี (IP Address) ชนิดของเว็บเบราว์เซอร์ (Web browser) ที่ใช้ในการเข้าถึง หน้าเว็บเพจ (Web page) ที่เยี่ยมชม ระยะเวลาที่เยี่ยมชม เว็บไซต์ที่อ้างถึงเว็บของบริษัท ข้อมูลเครือข่ายโทรศัพท์ ข้อมูลรุ่นและระบบของเครื่องมืออุปกรณ์ เป็นต้น</span></li>

                                <li> <span className="w-8 table-cell">(ช)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลส่วนบุคคลที่อ่อนไหว</span> เช่น เชื้อชาติ ศาสนา ข้อมูลโภชนาการ ความคิดเห็นทางการเมือง ข้อมูลทางชีวภาพ ลายนิ้วมือ ระบบจดจำใบหน้า ข้อมูลอัตลักษณ์บุคคล (Biometrics) ใบหน้า ข้อมูลจากการจดจำม่านตา ข้อมูลสุขภาพ น้ำหนัก ส่วนสูง ประวัติอาการแพ้ ประวัติทางการแพทย์ และประวัติอาชญากรรม เป็นต้น</span></li>

                                <li> <span className="w-8 table-cell">(ซ)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลทางการเงิน</span> เช่น ข้อมูลบัตรเครดิตหรือบัตรเดบิต รายละเอียดบัญชีธนาคาร ข้อมูลที่มาของทุน รายการทรัพย์สิน เป็นต้น</span></li>

                                <li> <span className="w-8 table-cell">(ฌ)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลพนักงาน</span> เช่น ข้อมูลประกันสังคม ข้อมูลภาษี ประวัติการศึกษา ประวัติการทำงาน อัตราเงินเดือน ผลการปฏิบัติงาน ข้อมูลเวลาการทำงานและการลา เป็นต้น</span></li>
                                <li> <span className="w-8 table-cell">(ญ)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลเพื่อการรักษาความปลอดภัย</span> เช่น ข้อมูลจากกล้องวงจรปิด ทะเบียนรถ เป็นต้น</span></li>
                                <li> <span className="w-8 table-cell">(ฎ)</span><span className="table-cell"><span className="font-normal break-all">ข้อมูลผู้มีส่วนได้ส่วนเสีย</span> เช่น ข้อมูลสัดส่วนการถือหุ้น ข้อมูลในหนังสือมอบฉันทะ ใบหุ้น หุ้นกู้ เป็นต้น</span></li>


                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">หากท่านต้องการซื้อสินค้าหรือใช้บริการใดๆ ของบริษัท ทำงานร่วมกับบริษัท หรือมีความสัมพันธ์ทางธุรกิจใดๆ กับ บริษัท บริษัทจะต้องใช้ข้อมูลส่วนบุคคลของท่าน เพื่อจำหน่ายสินค้าหรือให้บริการดังกล่าว ทำข้อตกลงกับท่าน ปฏิบัติตามภาระผูกพันใดๆ
                                ที่มีไว้กับท่าน หรือปฏิบัติตามกฎหมายที่บังคับใช้ หากท่านไม่ให้ข้อมูลส่วนบุคคลแก่บริษัท บริษัทจะไม่สามารถจำหน่ายสินค้าหรือให้บริการดังกล่าว ทำข้อตกลงใดๆ กับท่าน ปฏิบัติตามภาระผูกพันใดๆ ที่มีไว้กับท่าน และอาจส่งผลให้มีการละเมิดสัญญาระหว่างท่านกับบริษัท หรือการละเมิดกฎหมายที่บังคับใช้

                            </p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">หากท่านได้ให้ข้อมูลส่วนบุคคลของบุคคลที่สามแก่เรา เช่น ชื่อ นามสกุล ที่อยู่ และหมายเลขโทรศัพท์เพื่อติดต่อกรณีฉุกเฉิน รายได้ของบุคคลในครอบครัว หรือในกรณีที่ท่านเข้าใช้บริการในแพลตฟอร์มใดๆ ของเรา หากท่านให้ความยินยอม เราสามารถเข้าถึงและเก็บรวบรวมข้อมูลส่วนบุคคลของบุคคลที่สามที่เกี่ยวข้องกับท่านได้ เช่น ข้อมูลชื่อ รูปภาพ และ/หรือหมายเลขโทรศัพท์ ตลอดจนข้อมูลส่วนบุคคล และข้อมูลสำหรับติดต่อของครอบครัว เพื่อน บุคคลที่ติดต่อได้กรณีฉุกเฉิน บุคคลตามคำแนะนำ หรือบุคคลอ้างอิง เป็นต้น กรุณาแจ้งบุคคลเหล่านั้น ให้ทราบถึงนโยบายความเป็นส่วนตัวนี้ และ/หรือขอความยินยอมจากบุคคลเหล่านั้น
                            </p>


                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">2.2</span><span className="table-cell">บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็น หรือเพื่อประโยชน์ตามวัตถุประสงค์ในการเก็บรวบรวม และเป็นไปตามที่กฎหมายกำหนดเท่านั้น</span></li>
                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทอาจเก็บข้อมูลของท่านโดยแปลงเป็นข้อมูลไม่ระบุตัวตน ในกรณีที่มีการเชื่อมต่อเว็บไซต์ หรือโฆษณาอื่นที่ไม่ใช่ของบริษัท นโยบายความเป็นส่วนตัวจะเป็นไปตามที่เว็บไซต์นั้นๆ กำหนด โดยบริษัทไม่มีส่วนเกี่ยวข้องแต่อย่างใด
                            </p>
                        </section>

                        <section id="unit3">
                            <h1 className="text-lg  mb-2">3. วิธีการเก็บรวบรวมข้อมูลส่วนบุคคล  </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านที่บริษัทได้รับจากท่าน หรือแหล่งข้อมูลอื่นๆ หรือจากบริษัทในเครือ
                                บริษัทย่อย พันธมิตรทางธุรกิจ หรือการสื่อสารระหว่างบริษัทเหล่านั้นกับท่าน ทั้งวิธีการ Offline และ Online เช่น

                            </p>



                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">3.1</span><span className="table-cell">ผ่านช่องทางของบริษัท เช่น เอกสาร รวมถึงสื่ออิเล็กทรอนิกส์ หรือทางโทรศัพท์ หรือวาจา การเข้าร่วมกิจกรรม การซื้อสินค้าและบริการ การสมัครเข้าทำงาน การเข้าทำธุรกรรมใดๆ กับบริษัท </span></li>
                                <li> <span className="w-8 table-cell">3.2</span><span className="table-cell">ผ่านเว็บไซต์ หรือแพลตฟอร์มออนไลน์ เช่น การทำแบบสำรวจ การกรอกข้อมูลเพื่อรับข้อเสนอโปรโมชั่น การกดติดตามเพื่อรับข้อมูลส่งเสริมการขาย หรือติดต่อบริษัท โดยบริษัทจะมีการเก็บ log ในการใช้งานของท่านจากบนแอปพลิเคชันการซื้อสินค้าและบริการ การสมัครเข้าทำงาน การเข้าทำธุรกรรมใดๆ กับบริษัท</span></li>
                                <li> <span className="w-8 table-cell">3.3</span><span className="table-cell">ช่องทางของบุคคลที่สาม เช่น ตัวแทน คู่ค้า หรือผู้ให้บริการอื่น หรือพันธมิตรทางธุรกิจ เช่น Facebook, WeChat, Google, Line, Whatsapp, Instagram</span></li>
                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทอาจรวบรวมข้อมูลส่วนบุคคลจากแหล่งอื่นเช่นกัน เช่น จากสมาชิกในครอบครัวหรือบุคคลที่เกี่ยวข้องของท่าน  บุคคลอ้างอิง บริษัทการตลาด ตัวแทนจัดหางาน ลูกค้าองค์กร ผู้ขาย หรือผู้มีส่วนได้ส่วนเสีย และแหล่งข้อมูลอื่นๆ ที่เปิดเผยต่อสาธารณะในฐานข้อมูล Offline และ Online</p>
                        </section>

                        <section id="unit4">
                            <h1 className="text-lg  mb-2">4. วัตถุประสงค์ในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล</h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทอาจเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของท่านเท่าที่จำเป็น ตามที่กฎหมายกำหนด เพื่อวัตถุประสงค์ และพื้นฐานที่ถูกต้องตามกฎหมายที่ระบุไว้ต่อไปนี้ รวมถึงวัตถุประสงค์ใดๆ และพื้นฐานทางกฎหมายที่ระบุไว้ในนโยบายคุ้มครองข้อมูลส่วนบุคคล วัตถุประสงค์อื่นใดที่ท่านให้ความยินยอมแก่บริษัทเป็นครั้งคราว และวัตถุประสงค์อื่นใดตามที่ได้รับอนุญาตหรือจำเป็นตาม PDPA และ/หรือกฎหมายที่บังคับใช้ </p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">4.1</span><span className="table-cell">เพื่อการดำเนินธุรกิจของบริษัท เช่น จัดทำแผนการตลาด วิเคราะห์ข้อมูลและการวิจัยตลาด ประมวลผลข้อมูลในการสำรวจความคิดเห็นของท่าน การปรับปรุงและพัฒนาสินค้าและการให้บริการ การพิจารณาการดำเนินงานและขยายธุรกิจของบริษัท หรือเพื่อเรียนรู้เกี่ยวกับสินค้าและ/หรือบริการที่ท่านอาจสนใจ</span></li>

                                <li> <span className="w-8 table-cell">4.2</span><span className="table-cell">เพื่อติดต่อสื่อสาร แจ้งข้อมูลข่าวสารต่างๆ ที่เกี่ยวข้องกับโครงการ สินค้าและการบริการของบริษัท ประชาสัมพันธ์ และนำเสนอโครงการที่ท่านอาจจะสนใจ รวมถึงข้อเสนอเกี่ยวกับโครงการ สินค้าและการให้บริการ และโปรโมชั่นต่างๆ ในการส่งเสริมกิจกรรมทางการตลาด หรือกรณีมีการจองออนไลน์ (Online Booking) บริษัทจะทำการจัดเก็บและใช้ข้อมูลที่จำเป็นในการออกเอกสารสำคัญสำหรับการทำรายการจอง</span></li>

                                <li> <span className="w-8 table-cell">4.3</span><span className="table-cell">เพื่อรักษาความสัมพันธ์ระหว่างบริษัทและท่าน เช่น การให้ของขวัญหรือจัดงานเลี้ยงวันเกิดตามความต้องการของท่าน</span></li>

                                <li> <span className="w-8 table-cell">4.4</span><span className="table-cell">เพื่อดำเนินการตามเป้าหมายและ/หรือการตลาดทางตรง เช่น เพื่อเสนอขาย อัปเดต และส่งเสริมการขายสินค้าและบริการตามความชอบและไลฟ์สไตล์ของท่าน รวมถึงงานกิจกรรมที่ท่านอาจสนใจเข้าร่วม</span></li>






                                <li><span className="w-8 table-cell">4.5</span><span className="table-cell">เพื่อถ่ายภาพหรือวิดีโอของท่านใน Sales Gallery และเผยแพร่หรือโฆษณาภาพและ/หรือวิดีโอดังกล่าวบนเว็บไซต์และแอปพลิเคชันของบริษัทหรือแพลตฟอร์มอื่นๆ</span></li>
                                <li><span className="w-8 table-cell">4.6</span><span className="table-cell">เพื่อจัดหาอาหารและ/หรือสิ่งอำนวยความสะดวกอื่นๆ อันเนื่องมาจากข้อมูลการแพ้อาหารหรือศาสนาของท่าน</span></li>
                                <li><span className="w-8 table-cell">4.7</span><span className="table-cell">เพื่อประเมินความเหมาะสมของท่านในการเข้าทำงานกับบริษัท โดยพิจารณาจากข้อมูลที่ละเอียดอ่อน เช่น ประวัติอาชญากรรมและข้อมูลด้านสุขภาพ เป็นต้น</span></li>
                                <li><span className="w-8 table-cell">4.8</span><span className="table-cell">เพื่อรวบรวมข้อมูลส่วนบุคคลที่ละเอียดอ่อนของคุณตามความจำเป็น เช่น บัตรประจำตัวของคุณ (ซึ่งมีศาสนาและ/หรือกรุ๊ปเลือด และ/หรือเพื่อยืนยันตัวตนของท่านก่อนทำธุรกรรมต่อไป)</span></li>
                                <li><span className="w-8 table-cell">4.9</span><span className="table-cell">เพื่อให้เป็นไปตามข้อกำหนดของกฎหมาย เช่น PDPA ประมวลกฎหมายแพ่งและพาณิชย์ ประมวลรัษฎากร พระราชบัญญัติบริษัทมหาชนจำกัด พ.ศ. 2535 และพระราชบัญญัติหลักทรัพย์และตลาดหลักทรัพย์ พ.ศ. 2535 พระราชบัญญัติคุ้มครองแรงงาน พ.ศ. 2541 พระราชบัญญัติประกันสังคม พ.ศ. 2533 พระราชบัญญัติอาคารชุด พ.ศ. 2522 พระราชบัญญัติโรงแรม พ.ศ. 2547 พระราชบัญญัติการบัญชี พ.ศ. 2543 พระราชบัญญัติว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550 และพระราชบัญญัติคนเข้าเมือง พ.ศ. 2522 เป็นต้น</span></li>
                                <li><span className="w-8 table-cell">4.10</span> <span className="table-cell">เพื่อปฏิบัติตามคำสั่งศาลและ/หรือคำสั่งของทางราชการ</span></li>
                                <li><span className="w-8 table-cell">4.11</span> <span className="table-cell">เพื่อการตรวจสอบทางการเงินของบริษัทและบริษัทในเครือ ตามที่กฎหมายกำหนด</span></li>
                                <li><span className="w-8 table-cell">4.12</span> <span className="table-cell">เพื่อตรวจสอบและประเมินความรู้ความสามารถของท่าน ซึ่งอาจเป็นผู้ได้รับคัดเลือกเข้าทำงานกับบริษัท รวมถึงเพื่อการติดต่อสื่อสารและการสัมภาษณ์ เช่น พนักงานทั่วไปของบริษัท และพนักงานฝ่ายขาย เป็นต้น</span></li>
                                <li><span className="w-8 table-cell">4.13</span> <span className="table-cell">เพื่อการเข้าทำข้อตกลงใดๆ และปฏิบัติตามหน้าที่และภาระผูกพันตามข้อตกลงนั้น</span></li>
                                <li><span className="w-8 table-cell">4.14</span> <span className="table-cell">เพื่อการจำหน่ายสินค้าและการให้บริการ การปรับปรุงและพัฒนาโครงการและการบริการของบริษัท รวมถึงโครงการอื่นๆ ที่จะมีขึ้นในอนาคต รวมถึงการให้บริการลูกค้าสัมพันธ์หลังการจำหน่ายสินค้าและการให้บริการดังกล่าว </span></li>
                                <li><span className="w-8 table-cell">4.15</span> <span className="table-cell">เพื่อเสนอจำหน่ายสินค้าและการให้บริการแบบเฉพาะเจาะจงกับความต้องการของท่าน </span></li>
                                <li><span className="w-8 table-cell">4.16</span> <span className="table-cell">เพื่อทำหรือดำเนินการชำระเงิน คืนเงิน หรือออกใบแจ้งหนี้และใบเสร็จรับเงิน</span></li>
                                <li><span className="w-8 table-cell">4.17</span> <span className="table-cell">เพื่อตอบสนองต่อคำขอของท่านเกี่ยวกับข้อมูลโครงการของบริษัทที่ท่านสนใจ</span></li>
                                <li><span className="w-8 table-cell">4.18</span> <span className="table-cell">เพื่อบริหารจัดการและรักษาความปลอดภัยของธุรกิจของบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.19</span> <span className="table-cell ">เพื่อตรวจสอบความถูกต้องและยืนยันตัวตน การดำเนินการตามความประสงค์ของท่านที่ได้แจ้งไว้กับบริษัท รวมถึงดำเนินธุรกรรมต่างๆ ที่เกี่ยวข้องกับโครงการ หรือสินค้าและบริการของบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.20</span> <span className="table-cell">เพื่อป้องกันการสูญเสีย อาชญากรรม การฉ้อฉล หรือการกระทำที่ผิดกฎหมายใดๆ</span></li>
                                <li><span className="w-8 table-cell">4.21</span> <span className="table-cell">เพื่อดำเนินการสอบสวนการต่อต้านการฟอกเงินและความล้มเหลวในการทำธุรกรรม</span></li>
                                <li><span className="w-8 table-cell">4.22</span> <span className="table-cell">เพื่อดำเนินการตรวจสอบภายในของธุรกิจ</span></li>
                                <li><span className="w-8 table-cell">4.23</span> <span className="table-cell">เพื่อดำเนินการทวงถามหนี้</span></li>
                                <li><span className="w-8 table-cell">4.24</span> <span className="table-cell">เพื่อบริหารจัดการและแก้ไขปัญหาทางเทคนิคบนเว็บไซต์และแอปพลิเคชันของบริษัท และเพื่อปรับปรุงธุรกิจบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.25</span> <span className="table-cell">เพื่อเชื่อมโยงข้อมูลระหว่างบริษัทและบริษัทในเครือในการดำเนินธุรกิจตามปกติ</span></li>
                                <li><span className="w-8 table-cell">4.26</span> <span className="table-cell">เพื่อให้ที่ปรึกษา ผู้ให้บริการ คู่ค้า ซัพพลายเออร์ ผู้รับเหมา ผู้รับเหมาช่วง สามารถจัดหาสินค้าและบริการให้กับบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.27</span> <span className="table-cell">ดำเนินการ บริหารจัดการ และปรับปรุงการดำเนินธุรกิจตามปกติ และจัดให้มีการบริหารจัดการเพื่อการกำกับดูแลกิจการที่ดี</span></li>
                                <li><span className="w-8 table-cell">4.28</span> <span className="table-cell">เพื่อสรรหาและประเมินศักยภาพของกรรมการ พนักงานทั่วไป พนักงานขาย หรือบุคคลอื่นๆ เพื่อร่วมงานกับบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.29</span> <span className="table-cell">เพื่อการสรรหาตำแหน่งงานที่ว่างในปัจจุบันและอนาคต</span></li>
                                <li><span className="w-8 table-cell">4.30</span> <span className="table-cell">เพื่อสื่อสารกับข้อมูลอ้างอิงที่ท่านให้ไว้กับบริษัท เช่น อดีตนายจ้าง เพื่อตรวจสอบประวัติก่อนทำข้อตกลงการจ้างงานใดๆ กับบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.31</span> <span className="table-cell">เพื่อติดต่อบุคคลที่เกี่ยวข้องในกรณีฉุกเฉิน</span></li>
                                <li><span className="w-8 table-cell">4.32</span> <span className="table-cell">เข้าทำสัญญาหรือสื่อสารกับลูกค้าองค์กร คู่ค้า หรือผู้มีส่วนได้ส่วนเสียโดยการผ่านตัวแทน เช่น กรรมการหรือพนักงาน เป็นต้น</span></li>
                                <li><span className="w-8 table-cell">4.33</span> <span className="table-cell">เพื่อถ่ายภาพหรือวิดีโอของท่านสำหรับกิจกรรมใดๆ ที่จัดขึ้นโดยบริษัท และเผยแพร่ หรือโฆษณาภาพหรือวิดีโอดังกล่าวบนเว็บไซต์และแอปพลิเคชันของบริษัทหรือแพลตฟอร์มอื่นๆ </span></li>
                                <li><span className="w-8 table-cell">4.34</span> <span className="table-cell">เพื่อแบ่งปันข้อมูลส่วนบุคคลของท่านตามความจำเป็นเพื่อวัตถุประสงค์ในการควบรวมกิจการ การปรับโครงสร้างองค์กรธุรกิจ การล้มละลาย การฟื้นฟู และการดำเนินการที่คล้ายคลึงกันบริษัท</span></li>
                                <li><span className="w-8 table-cell">4.35</span> <span className="table-cell">เพื่อประเมินความเสี่ยงที่อาจเกิดขึ้นจากการลงทุน</span></li>
                                <li><span className="w-8 table-cell">4.36</span> <span className="table-cell">เพื่อรวบรวมข้อมูลส่วนบุคคลของพยานเพื่อเป็นหลักฐานในสัญญา</span></li>
                                <li><span className="w-8 table-cell">4.37</span> <span className="table-cell">เพื่อจัดเตรียมเอกสารทางประวัติศาสตร์หรือจดหมายเหตุเพื่อประโยชน์สาธารณะหรือเพื่อวัตถุประสงค์ที่เกี่ยวข้องกับการวิจัยหรือสถิติ</span></li>
                                <li><span className="w-8 table-cell">4.38</span> <span className="table-cell">เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของบุคคล</span></li>
                                <li><span className="w-8 table-cell">4.39</span> <span className="table-cell">เพื่อดำเนินงานสาธารณะหรือเป็นผลมาจากการใช้อำนาจหน้าที่ของทางการ</span></li>

                            </ul>
                        </section>

                        <section id="unit5">
                            <h1 className="text-lg  mb-2">5. ผู้ที่อาจได้รับการเปิดเผยข้อมูลส่วนบุคคลของท่าน</h1>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">5.1</span><span className="table-cell">บริษัทในเครือ และกลุ่มบริษัทคู่ค้า </span></li>

                                <li> <span className="w-8 table-cell">5.2</span><span className="table-cell">พนักงานของบริษัทที่เกี่ยวข้อง</span></li>

                                <li> <span className="w-8 table-cell">5.3</span><span className="table-cell">ผู้มีส่วนได้ส่วนเสียของบริษัท</span></li>

                                <li> <span className="w-8 table-cell">5.4</span><span className="table-cell">ตัวแทน นายหน้า ผู้รับเหมา ผู้ให้บริการ คู่สัญญาของบริษัทที่มีหน้าที่ดำเนินการให้บริการใดที่จำเป็นต่อการใช้ข้อมูลส่วนบุคคล ที่ปรึกษาด้านต่างๆ เช่น ผู้ให้คำปรึกษาด้านกฎหมาย ผู้สอบบัญชี ที่ปรึกษาการทางธุรกิจ</span></li>

                                <li><span className="w-8 table-cell">5.5</span><span className="table-cell">สถาบันการเงิน องค์กรด้านสินเชื่อที่เป็นกลุ่มบุคคลภายนอก </span></li>
                                <li><span className="w-8 table-cell">5.6</span><span className="table-cell">หน่วยงานภาครัฐ หรือหน่วยงานกำกับดูแล หรือบุคคลใดที่บริษัทต้องเปิดเผยข้อมูลภายใต้กฎหมาย ระเบียบ คำสั่งที่เกี่ยวข้องกับบริษัท หรือตามข้อตกลงที่บริษัทมีต่อหน่วยงานภาครัฐ หรือบุคคลอื่นใด</span></li>

                            </ul>
                        </section>

                        <section id="unit6">

                            <h1 className="text-lg  mb-2">6. ระยะเวลาในการเก็บข้อมูลส่วนบุคคล</h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทจะเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ไม่เกิน 10 ปี หลังจากการติดต่อครั้งสุดท้ายหรือการสิ้นสุดของสัญญาระหว่างบริษัทกับท่าน อย่างไรก็ตาม บริษัทอาจยังคงเก็บรักษาข้อมูลส่วนบุคคลของท่านตราบเท่าที่ (ก) ได้รับอนุญาตจาก PDPA และ/หรือกฎหมายที่บังคับใช้ (ข) บริษัทอยู่ภายใต้ข้อตกลงบางประการกับท่าน (ค) บริษัทอยู่ภายใต้ภาระผูกพันทางกฎหมายเกี่ยวกับการเก็บรักษาข้อมูลส่วนบุคคล (ง) ความยินยอมที่ท่านให้ไว้กับบริษัทยังไม่ถูกเพิกถอน และ (จ) เพื่อให้เป็นไปตามวัตถุประสงค์ของนโยบายความเป็นส่วนตัวนี้และนโยบายข้อมูลส่วนบุคคล (ถ้ามี)</p>
                        </section>


                        <section id="unit7">
                            <h1 className="text-lg  mb-2">7. มาตรการรักษาความปลอดภัยของข้อมูล</h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทได้มีความเกี่ยวข้องกับท่านเพื่อวัตถุประสงค์หลายประการ ดังนั้น บริษัทจึงได้มีการเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ ในการนี้ บริษัทรับรองว่าบุคลากร การดำเนินธุรกิจ และการปฏิบัติงานของบริษัท จะต้องปฏิบัติตามนโยบายความเป็นส่วนตัว นโยบายคุ้มครองข้อมูลส่วนบุคคล (ถ้ามี) และพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (&quot;PDPA&quot; ) และกฎหมายที่เกี่ยวข้องอื่นๆ เพื่อปกป้องความเป็นส่วนตัวและความปลอดภัยของท่าน รวมถึงเพื่อหลีกเลี่ยงการกระทำที่ไม่ได้รับอนุญาตหรือผิดกฎหมาย เพื่อป้องกันการละเมิดกฎหมาย และเพื่อลดความเสี่ยงที่อาจเกิดขึ้นจากการลงโทษที่กำหนดโดย PDPA และกฎหมายที่บังคับใช้ </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">ทั้งนี้ บริษัทตระหนักถึงความสำคัญของการรักษาความปลอดภัยของข้อมูลส่วนบุคคลของท่าน โดยบริษัทได้จัดเตรียมระบบเก็บฐานข้อมูล นโยบาย และมาตรการรักษาความปลอดภัยของข้อมูลส่วนบุคคลของท่านอย่างเหมาะสมและได้มาตรฐาน </p>
                        </section>

                        <section id="unit8">
                            <h1 className="text-lg  mb-2">8. วิธีการใช้คุกกี้ </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทอาจเก็บรวบรวม และใช้คุกกี้ รวมถึงเทคโนโลยีในลักษณะเดียวกัน เมื่อท่านเข้าเยี่ยมชมเว็บไซต์ แอปพลิเคชัน และใช้บริการของบริษัท ซึ่งนำมาใช้เพื่อระบุและแยกแยะผู้ใช้ที่เข้าชมเว็บไซต์และแอปพลิเคชันของบริษัท และติดตามการตั้งค่าส่วนบุคคล ซึ่งข้อมูลของท่านจะถูกเก็บรวบรวมโดยอัตโนมัติโดยคุกกี้ คุกกี้เหล่านี้ไม่ก่อให้เกิดผลร้ายใดๆ ต่อคอมพิวเตอร์หรือส่งไวรัสใดๆ </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">การเก็บรวบรวมคุกกี้ และเทคโนโลยีในลักษณะเดียวกันดังกล่าว จะช่วยให้บริษัทสามารถจดจำท่าน เช่น การจดจำชื่อ บัญชี รหัสผ่าน หรือความสนใจก่อนหน้านี้ เป็นต้น ทราบถึงความชื่นชอบของท่าน และปรับปรุงวิธีการที่บริษัทจะนำเสนอโครงการ และ/หรือบริการให้แก่ท่าน รวมถึงช่วยให้บริษัทสามารถมอบประสบการณ์ผ่านช่องทางออนไลน์ หรือการติดต่อสื่อสารกับท่านได้ดียิ่งขึ้น </p>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">ในกรณีที่ท่านในฐานะเจ้าของข้อมูล ไม่เห็นด้วยกับการใช้คุกกี้ในการรวบรวมข้อมูลโดยอัตโนมัติขณะเรียกดูเว็บไซต์และ
                                แอปพลิเคชันของบริษัท ท่านสามารถเลือกที่จะไม่ยอมรับคุกกี้ได้โดยไปที่การตั้งค่าในหน้าเว็บไซต์ของการตั้งค่าคุกกี้ในแต่ละเว็บไซต์ของบริษัทที่ท่านเรียกดู
                            </p>
                        </section>

                        <section id="unit9">
                            <h1 className="text-lg  mb-2">9. กล้องวงจรปิด </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทใช้กล้องวงจรปิดเพื่อบันทึกภาพผู้มาติดต่อ และยานพาหนะภายในและรอบๆ ที่ตั้งบริษัทและโครงการของบริษัท เพื่อความปลอดภัย รวมถึงการป้องกันและการตรวจจับอาชญากรรม กล้องวงจรปิดของบริษัท จะตรวจจับทางเข้า ล็อบบี้ ระเบียง ลานจอดรถภายในและนอกอาคาร รั้วรอบอาคาร และพื้นที่ภายในขอบเขตของบริษัทและโครงการของบริษัท ซึ่งประชาชนเข้าถึงได้ตลอด 24 ชม. ระบบเฝ้าระวังไม่ใช้การบันทึกเสียง บริษัทรับรองว่าบันทึกจากกล้องวงจรปิดจะถูกตรวจสอบโดยผู้มีอำนาจของบริษัทเท่านั้น </p>
                        </section>

                        <section id="unit10">
                            <h1 className="text-lg  mb-2">10. ผู้เยาว์ </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">ผู้เยาว์ หมายถึง บุคคลใดๆ ที่มีอายุต่ำกว่า 20 ปีบริบูรณ์ บริษัทอาจไม่ทราบอายุของเจ้าของข้อมูลที่กำลังเข้าชมเว็บไซต์และแอปพลิเคชันของบริษัท ผู้ปกครองของผู้เยาว์ที่มอบข้อมูลส่วนบุคคลผ่านเว็บไซต์และแอปพลิเคชันของบริษัท อาจขอให้บริษัท ลบข้อมูลส่วนบุคคลของผู้เยาว์ดังกล่าว (ถ้ามี) หากบริษัททราบว่า เจ้าของข้อมูลเป็นผู้เยาว์และผู้เยาว์ดังกล่าวไม่สามารถกระทำการตามลำพังตามประมวลกฎหมายแพ่งและพาณิชย์ได้ หาก PDPA กำหนด บริษัทจะดำเนินการขอความยินยอมจากผู้ปกครองโดยไม่ชักช้า  </p>
                        </section>

                        <section id="unit11">
                            <h1 className="text-lg  mb-2">11. ข้อมูลส่วนบุคคลที่รวบรวมก่อนการมีผลบังคับใช้ของ PDPA </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทมีสิทธิดำเนินการรวบรวมและใช้ข้อมูลส่วนบุคคลของท่านซึ่งได้รวบรวมไว้ก่อนที่ PDPA จะมีผลบังคับใช้ตามวัตถุประสงค์เดิมต่อไป หากท่านไม่ประสงค์ให้บริษัทเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของท่านต่อไป ท่านสามารถเพิกถอนความยินยอมของท่านได้ทุกเมื่อโดยติดต่อบริษัท หรือเจ้าหน้าที่คุ้มครองข้อมูลตามรายละเอียดในข้อที่ 16</p>
                        </section>

                        <section id="unit12">
                            <h1 className="text-lg  mb-2">12. สิทธิของเจ้าของข้อมูล </h1>
                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">12.1</span><span className="table-cell">สิทธิในการเข้าถึงข้อมูล ขอรับสำเนา หรือขอให้เปิดเผยการได้รับข้อมูลส่วนบุคคลของท่าน เว้นแต่กรณีที่บริษัทมีสิทธิปฏิเสธคำขอของท่านตามกฎหมาย หรือคำสั่งศาล หรือกรณีที่คำขอของท่านอาจจะส่งผลกระทบที่อาจก่อให้เกิดความเสียหายต่อสิทธิ และเสรีภาพของบุคคลอื่น เพื่อความปลอดภัยของท่าน บริษัทมีสิทธิตรวจสอบและยืนยันตัวตนของท่านก่อนที่จะเปิดเผยข้อมูลส่วนบุคคลตามที่ท่านร้องขอ </span></li>

                                <li> <span className="w-8 table-cell">12.2</span><span className="table-cell">สิทธิในการขอแก้ไขหรือปรับปรุงข้อมูลส่วนบุคคลของท่านที่ไม่ถูกต้อง หรือไม่ครบถ้วนสมบูรณ์</span></li>

                                <li> <span className="w-8 table-cell">12.3</span><span className="table-cell">สิทธิในการขอให้โอนข้อมูลส่วนบุคคลของท่านไปยังผู้ควบคุมข้อมูลอื่น เว้นแต่บริษัทไม่สามารถทำได้โดยสภาพทางเทคนิค หรือบริษัทมีเหตุในการปฏิเสธคำขอของท่านโดยชอบด้วยกฎหมาย</span></li>

                                <li> <span className="w-8 table-cell">12.4</span><span className="table-cell">สิทธิในการโต้แย้งคัดค้านการดำเนินการใดๆ ซึ่งเป็นไปตามวัตถุประสงค์ที่ถูกต้องตามกฎหมาย หรือพื้นฐานทางกฎหมายอื่น</span></li>

                                <li><span className="w-8 table-cell">12.5</span><span className="table-cell">สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคลของท่านในบางกรณีเป็นการชั่วคราวได้ เช่น บริษัทอยู่ระหว่างการตรวจสอบคำร้องขอใช้สิทธิแก้ไขข้อมูลส่วนบุคคล หรือคำขอคัดค้านของท่าน หรือท่านขอให้บริษัทระงับการใช้ข้อมูลส่วนบุคคลแทนการลบหรือทำลายข้อมูลส่วนบุคคลที่ไม่มีความจำเป็นอีกต่อไป เนื่องจากท่านมีความจำเป็นต้องขอให้บริษัทเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้เพื่อใช้ในการก่อตั้งสิทธิเรียกร้องตามกฎหมาย การปฏิบัติตามหรือการใช้สิทธิเรียกร้องตามกฎหมาย หรือการยกขึ้นต่อสู้สิทธิเรียกร้องตามกฎหมาย</span></li>
                                <li><span className="w-8 table-cell">12.6</span><span className="table-cell">สิทธิในการขอให้ลบ หรือทำลายข้อมูลส่วนบุคคล หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวบุคคลได้ เว้นแต่บริษัทจะมีเหตุอันชอบธรรมด้วยกฎหมายในการปฏิเสธคำของขอท่าน </span></li>
                                <li><span className="w-8 table-cell">12.7</span><span className="table-cell">สิทธิในการขอถอนความยินยอม โดยท่านมีสิทธิขอถอนความยินยอมที่ท่านได้ให้ไว้กับบริษัทเมื่อใดก็ได้ ตามขั้นตอนและวิธีการที่บริษัทกำหนด </span></li>

                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">ท่านอาจใช้สิทธิดังกล่าวข้างต้นโดยเปลี่ยนการตั้งค่าความเป็นส่วนตัว ยกเลิกการสมัคร หรือติดต่อบริษัท หรือเจ้าหน้าที่คุ้มครองข้อมูลตามรายละเอียดในข้อที่ 16 </p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">คำขอลบหรือปกปิดข้อมูลส่วนบุคคลของท่าน หรือร้องขอให้จำกัดหรือคัดค้านการประมวลผลข้อมูลส่วนบุคคล อาจส่งผลให้บริษัท ไม่สามารถปฏิบัติหน้าที่ตามสัญญาที่มีอยู่ ไม่สามารถจำหน่ายสินค้าหรือให้บริการ และ/หรือดำเนินการตามคำขอของท่านได้</p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">หากการเพิกถอนความยินยอมของท่านมีผลกระทบต่อท่านในทางใดก็ตาม บริษัทหรือเจ้าหน้าที่คุ้มครองข้อมูลจะแจ้งให้ท่านทราบถึงผลกระทบของการเพิกถอนความยินยอมดังกล่าว</p>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">เพื่อความปลอดภัยของท่าน บริษัทอาจปฏิเสธที่จะปฏิบัติตามคำขอหาก (ก) บุคคลที่ส่งคำขอไม่มีหลักฐานยืนยันว่าตนเป็นเจ้าของข้อมูลหรือไม่มีอำนาจในการส่งคำขอดังกล่าว (ข) คำขอนั้นไม่สมเหตุสมผล เช่น บุคคลที่ส่งคำขอไม่มีสิทธิภายใต้ PDPA หรือไม่มีข้อมูลส่วนบุคคลที่บริษัทครอบครอง (ค) คำขอนั้นเป็นการก่อการรบกวน เช่น คำขอซ้ำกับคำขอก่อนหน้าจากบุคคลเดียวกันโดยไม่มีเหตุผล (ง) บริษัทมีเหตุผลที่ถูกต้องตามกฎหมายที่จะปฏิเสธคำขอดังกล่าวตามที่ PDPA และ/หรือกฎหมายที่บังคับใช้ใดๆ กำหนดหรืออนุญาต</p>
                        </section>

                        <section id="unit13">
                            <h1 className="text-lg  mb-2">13. ข้อยกเว้นการดูแลรักษาข้อมูลส่วนบุคคล  </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">ในกรณีต่อไปนี้ไม่ถือว่าเป็นการกระทำที่ฝ่าฝืนต่อนโยบายความเป็นส่วนตัว</p>
                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">13.1</span><span className="table-cell">ข้อมูลที่เป็นความลับนั้น ได้ถูกเปิดเผยต่อสาธารณะแล้วตั้งแต่เวลาที่ท่านได้เปิดเผยข้อมูลให้บริษัท หรือถูกเปิดเผยต่อสาธารณะโดยมิใช่ความผิดของบริษัท</span></li>

                                <li> <span className="w-8 table-cell">13.2</span><span className="table-cell">การเปิดเผยข้อมูลโดยได้รับความยินยอมจากท่านไม่ว่าเป็นลายลักษณ์อักษร หรือการอนุญาตโดยวิธีการอื่นใด</span></li>

                                <li> <span className="w-8 table-cell">13.3</span><span className="table-cell">การเปิดเผยข้อมูลตามความจำเป็น เนื่องจากกระทำตามกฎหมาย คำสั่ง กฎ ข้อบังคับ คำสั่งศาล คำพิพากษา หรือหน่วยงานของรัฐ หรือตามความจำเป็นอื่นใด </span></li>
                            </ul>

                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">ในการใช้สิทธิดังกล่าวข้างต้น ท่านสามารถติดต่อมายังบริษัทได้ ตามรายละเอียดที่ปรากฏในหัวข้อ &quot;ช่องทางการติดต่อ&quot; ด้านล่างนี้</p>
                        </section>

                        <section id="unit14">
                            <h1 className="text-lg  mb-2">14. การปรับปรุงแก้ไขรายละเอียดเกี่ยวกับนโยบายความเป็นส่วนตัว  </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">บริษัทขอสงวนสิทธิในการปรับปรุงแก้ไขรายละเอียดเกี่ยวกับนโยบายความเป็นส่วนตัวทั้งหมดหรือบางส่วน โดยไม่ต้องแจ้งให้ท่านทราบ ทั้งนี้ การแก้ไขเปลี่ยนแปลงใดๆ จะมีผลทันทีเมื่อบริษัทเผยแพร่นโยบายความเป็นส่วนตัวที่แก้ไขดังกล่าวทาง <a href="https://siamsindhorn.com/" target="_blank" rel="noopener noreferrer" className="text-[#82603f]">https://siamsindhorn.com/</a> </p>
                        </section>


                        <section id="unit15">
                            <h1 className="text-lg  mb-2">15. เบ็ดเตล็ด  </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">นโยบายความเป็นส่วนตัวและนโยบายคุ้มครองข้อมูลส่วนบุคคลอยู่ภายใต้และจะถูกตีความตาม PDPA และกฎหมายของประเทศไทย </p>
                        </section>

                        <section id="unit16">
                            <h1 className="text-lg  mb-2">16. ช่องทางการติดต่อ  </h1>
                            <p className="break-words whitespace-pre-line font-light text-sm sm:text-base indent-6 text-justify mb-2">หากท่านมีความประสงค์ที่จะใช้สิทธิเกี่ยวกับข้อมูลส่วนบุคคลของท่าน หรือมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ สามารถติดต่อได้ที่</p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-16 table-cell">เรียน</span><span className="table-cell">เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล</span></li>

                                <li> <span className="w-16 table-cell">ที่อยู่</span><span className="table-cell">บริษัท สยามสินธร จำกัด<br />
                                    130-132 อาคารสินธร ทาวเวอร์ 1 ชั้น 4 ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร 10330
                                </span></li>

                                <li> <span className="w-16 table-cell">โทร</span><span className="table-cell">02-263-2500</span></li>
                                <li> <span className="w-16 table-cell">อีเมล</span><span className="table-cell text-[#82603f]">
                                    <a href="mailto:personaldata@siamsindhorn.com" target="_blank" rel="noopener noreferrer">
                                        personaldata@siamsindhorn.com
                                    </a>
                                </span></li>
                            </ul>
                        </section>

                        <section id="unit17">
                            <h1 className="text-lg  mb-2">เอกสารแนบท้าย 1. รายละเอียดเว็บไซต์ และช่องทางการติดต่อของบริษัท</h1>
                            <p className="break-words whitespace-pre-line text-sm sm:text-base text-justify mb-2">เว็บไซต์ของกลุ่มบริษัท สยามสินธร จำกัด</p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">1.</span><span className="table-cell">https://siamsindhorn.com</span></li>
                                <li> <span className="w-8 table-cell">2.</span><span className="table-cell">https://sindhornvillage.com</span></li>
                                <li> <span className="w-8 table-cell">3.</span><span className="table-cell">https://sindhorntonson.com   </span></li>
                                <li> <span className="w-8 table-cell">4.</span><span className="table-cell">https://sindhornlumpini.com </span></li>
                                <li> <span className="w-8 table-cell">5.</span><span className="table-cell">https://sindhornresidence.com</span></li>
                                <li> <span className="w-8 table-cell">6.</span><span className="table-cell">https://theresidencesatsindhornkempinski.com </span></li>
                                <li> <span className="w-8 table-cell">7.</span><span className="table-cell">https://baansindhorn.com </span></li>
                                <li> <span className="w-8 table-cell">8.</span><span className="table-cell">https://sindhornbuilding.com</span></li>
                                <li> <span className="w-8 table-cell">9.</span><span className="table-cell">https://theoldsiam.co.th</span></li>
                                <li> <span className="w-8 table-cell">10.</span><span className="table-cell">https://srijulsup.com</span></li>
                                <li> <span className="w-8 table-cell">11.</span><span className="table-cell">https://sanehjaan.com</span></li>
                                <li> <span className="w-8 table-cell">12.</span><span className="table-cell">https://polofootballpark.com</span></li>
                                <li> <span className="w-8 table-cell">13.</span><span className="table-cell">https://eiffelbakery.com </span></li>

                            </ul>

                            <p className="break-words whitespace-pre-line  text-sm sm:text-base  text-justify mb-2">LINE Official Account</p>

                            <ul className="ml-5 list-outside font-light text-sm sm:text-base  mb-2">
                                <li> <span className="w-8 table-cell">1.</span><span className="table-cell">Sindhorn Village</span></li>
                                <li> <span className="w-8 table-cell">2.</span><span className="table-cell">Sindhorn Food court</span></li>
                                <li> <span className="w-8 table-cell">3.</span><span className="table-cell">Sindhorn Building</span></li>
                                <li> <span className="w-8 table-cell">4.</span><span className="table-cell">Velaa Langsuan</span></li>
                                <li> <span className="w-8 table-cell">5.</span><span className="table-cell">The Old Siam BC</span></li>
                                <li> <span className="w-8 table-cell">6.</span><span className="table-cell">The Old Siam Plaza</span></li>
                                <li> <span className="w-8 table-cell">7.</span><span className="table-cell">Srijulsup</span></li>
                                <li> <span className="w-8 table-cell">8.</span><span className="table-cell">Cafe Eiffel</span></li>
                                <li> <span className="w-8 table-cell">9.</span><span className="table-cell">Polo Football Park</span></li>


                            </ul>
                        </section>


                    </div>
                </div>

            </div>
        </>
    );
}

export default privacypolicy;



