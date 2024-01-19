import React from "react";
import logoWhite from "../../assests/img/642599f3ba8884e666d28280_logo_white.svg"
import watsapp from "../../assests/img/6439a06784e0908458b3d757_wp_wt.svg"
import telegram from "../../assests/img/6439a066ec0eb27e3495a355_tg_wt.svg"
import email from "../../assests/img/6439a06784e0902407b3d753_mail_wt.svg"
import tel from "../../assests/img/6439a06649c436a2a5ef709b_tel_wt.svg"
import mapMark from "../../assests/img/6439a1168f14c9574bf6964b_map_wt.svg"

function Footer() {
  return (
    <footer id="footer" class="footer wf-section">
      <div class="blok_footer">
        <div class="blok_footer-_left">
          <a
            href="index.html"
            aria-current="page"
            class="blok_kontakty logo w-inline-block w--current"
          >
            <img
              src={logoWhite}
              loading="lazy"
              alt=""
              class="logo_footer"
            />
          </a>
          <div class="blok_kontakty mail adap">
            <div class="text_kontakty">Отдел продаж</div>
            <a href="mailto:info@farus.su" class="kontakty">
              info@farus.su
            </a>
          </div>
        </div>
        <div class="blok-adaptive">
          <div class="adaptive">
            <a href="#" class="blok_kontakty logo adaptiv w-inline-block">
              <img
                src={logoWhite}
                loading="lazy"
                alt=""
                class="logo_footer"
              />
            </a>
            <div class="blok_kontakty mss-logo adaptiv">
              <a
                href="https://api.whatsapp.com/send/?phone=79175576827&amp;text&amp;type=phone_number&amp;app_absent=0"
                target="_blank"
                class="mss-btn w-inline-block"
              >
                <img
                  src={watsapp}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a
                href="https://tlgg.ru/aofarus"
                target="_blank"
                class="mss-btn w-inline-block"
              >
                <img
                  src={telegram}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a href="#" class="mss-btn adaptive w-inline-block">
                <img
                  src={email}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a href="#" class="mss-btn adaptive w-inline-block">
                <img
                  src={tel}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a
                href="https://yandex.ru/profile/209032554540"
                target="_blank"
                class="mss-btn w-inline-block"
              >
                <img
                  src={mapMark}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
            </div>
          </div>
          <div class="blok_footer-_right">
            <a href="tel:+74951233150" class="tel_kontakty">
              +7 (495) 123-31-50
            </a>
            <a
              href="#"
              class="button-menu ftr w-button"
              data-ix="open-lb-and-box-button"
            >
              заказать звонок
            </a>
            <div class="blok_kontakty mss-logo">
              <a
                href="https://api.whatsapp.com/send/?phone=79175576827&amp;text&amp;type=phone_number&amp;app_absent=0"
                class="mss-btn w-inline-block"
              >
                <img
                  src={watsapp}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a
                href="https://tlgg.ru/farus_su"
                target="_blank"
                class="mss-btn w-inline-block"
              >
                <img
                  src={telegram}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a href="mailto:info@farus.su" class="mss-btn w-inline-block">
                <img
                  src={email}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a href="tel:+74951233150" class="mss-btn w-inline-block">
                <img
                  src={tel}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
              <a
                href="https://yandex.ru/profile/209032554540"
                target="_blank"
                class="mss-btn w-inline-block"
              >
                <img
                  src={mapMark}
                  loading="lazy"
                  alt=""
                  class="mss"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="blok_kontakty menu">
        <a href="o-kompanii.html" class="kontakty menu">
          о компании
        </a>
        <div class="line-menu"></div>
        <a href="ingibitory-korrozii.html" class="kontakty menu">
          производство
        </a>
        <div class="line-menu"></div>
        <a href="katalog.html" class="kontakty menu">
          каталог
        </a>
        <div class="line-menu"></div>
        <a href="zavod-vzhs.html" class="kontakty menu">
          завод ВЖС
        </a>
        <div class="line-menu adap2"></div>
        <a href="kontakty.html" class="kontakty menu">
          контакты
        </a>
        <div class="line-menu"></div>
        <a href="kontakty.html" class="kontakty menu lin">
          ФАРУС-Синтез
        </a>
        <div class="line-menu"></div>
        <a href="kontakty.html" class="kontakty menu lin">
          ФАРУС-Инжиниринг
        </a>
        <div class="line-menu adap2"></div>
        <a href="faust.html" class="kontakty menu lin">
          FAUST ™️
        </a>
      </div>
      <div class="blok_footer saf">
        <div class="safety-txt">© АО «ФАРУС», 2023 г. Все права защищены</div>
        <a href="privacy.html" class="safety polit">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

export default Footer;
