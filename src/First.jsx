import React from "react";
import ReactDOM from "react-dom";
import Fade from "react-reveal";

function First() {
  return (
    <div>
      <div
        className="first"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          outline: "1px solid black"
        }}
      >
        <img
          className="logo"
          style={{ height: "100px" }}
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt=""
        />
        <h1>SILAYGÜNEŞ</h1>
        <h5 className="mimarlıktext">MİMARLIK</h5>
      </div>
      <div className="secondpage" id="seconpageid">
        <div className="secondpagetext">
          <h1 style={{ textAlign: "center", padding: "30px", color: "brown" }}>
            Sılay Güneş
          </h1>
          <p style={{ padding: "30px", textAlign: "center" }}>
            Bro ipsum dolor sit amet trucks ripping hardtail gapers 360 skid lid
            bear trap steeps fully switch ACL wheelie drop. Bowl gnar grind
            fatty ride around, huck ripper shuttle mute pipe pow acro rip chain
            ring. Grind spread eagle chain suck flow pipe gear jammer. Pipe road
            rash
          </p>
        </div>
        <div className="secondpageimage">
          <img
            style={{ height: "600px", width: "1200px" }}
            className="firstimage"
            src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="thirdpage">
        <div className="thirdpagesolphoto">
          <img
            style={{
              height: "300px",
              width: "300px",
              outline: "1px solid white",
              outlineOffset: "-6px"
            }}
            src="https://img.freepik.com/premium-photo/3d-render-futuristic-concrete-architecture-with-car-park-empty-cement-floor_224530-2100.jpg"
            alt=""
          />
          <img
            style={{
              height: "300px",
              width: "300px",
              outline: "1px solid white",
              outlineOffset: "-6px"
            }}
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="thirdpagesağphotovetext">
          <div className="thirdpagesağphoto">
            <img
              style={{
                height: "620px",
                width: "800px",
                outline: "1px solid white",
                outlineOffset: "-6px"
              }}
              src="https://media.gettyimages.com/id/155440607/photo/modern-office-architecture.jpg?s=612x612&w=gi&k=20&c=ysuHeOXAg2h-72z_AlwtKR5XblaKsIF1De1_zonzpsc="
              alt=""
            />
          </div>
          <div className="thirdpagesağtext">
            <p className="thirdpagesağtext1">
              Bro ipsum dolor sit amet trucks ripping hardtail gapers 360 skid
              lid bear trap steeps fully switch ACL wheelie drop. Bowl gnar
              grind fatty ride around, huck ripper shuttle mute pipe pow acro
              rip chain ring. Grind spread eagle chain suck flow pipe gear
              jammer. Pipe road rash huckfest first tracks white room ride.
            </p>
          </div>
        </div>
      </div>
      <div className="ilkboşluk">
        <p className="ilkboşluktext">
          Bro ipsum dolor sit amet trucks ripping hardtail gapers 360 skid lid{" "}
        </p>
      </div>
      <div className="boşluktansonarkiresim">
        <img
          style={{ width: "1920px", height: "500px" }}
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        style={{ height: "200px", width: "600px" }}
        className="boşluktansonrakitext"
      >
        <p className="boşluktansonrakitext1">
          Bro ipsum dolor sit amet trucks ripping hardtail gapers 360 skid lid
          bear trap steeps fully switch ACL wheelie drop. Bowl gnar g
        </p>
      </div>
      <div className="işler">
        <div className="işlertek">
          <a href="https://8zy4z5.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://xwzvnp.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://43x8cv.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://37rh62.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://c55q4x.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://7hvtjp.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://s2h8zx.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://v2njyy.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://fkp8dn.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://3lyd6j.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://mmsc47.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://4wvs4j.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
        <div className="işlertek">
          <a href="https://sdt9hh.csb.app/">
            <img
              style={{ outline: "1px solid white", outlineOffset: "-6px" }}
              src="https://media.istockphoto.com/id/1328633577/photo/low-angle-view-of-futuristic-modern-architecture-skyscraper-of-corporate-office-building.jpg?s=170667a&w=is&k=20&c=P-fDjF-oVLoWv_3g0o1NxyHO9w4ghujMk0i0iR9Cb00="
              alt=""
            />
          </a>
          <p className="işlertext">bro ipsum</p>
          <p className="işlertext">bro ipsum</p>
        </div>
      </div>
      <div className="iletişimbaşlık">
        <h3>SİZE NASIL</h3>
        <h1>YARDIMCI OLABİLİRİZ?</h1>
      </div>
      <div className="iletişim">
        <div className="iletişimphoto">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/783/385/desktop-wallpaper-paintings-hands-michelangelo-the-creation-of-adam-backgrounds-the-creation-of-adam.jpg"
            alt=""
          />
        </div>
        <div className="iletişimbilgileri" style={{ width: "800px" }}>
          <p>
            TELEFON:
            {"+05059876532"}
          </p>
          <p>
            FAX:
            {"+05059876532"}
          </p>
          <p>
            EMAİL:
            {"silaygunes@gmial.com"}
          </p>
          <p>
            ADRES:
            {"emrah mah gülgün sok"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
