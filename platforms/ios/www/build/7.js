webpackJsonp([7],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]
            ]
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/terms/terms.html"*/'<ion-header class="transparent">\n    <ion-navbar>\n        <ion-title><span class="text-white">TÉRMINOS & CONDICIONES</span></ion-title>\n    </ion-navbar>\n    <div class="logo">\n        <img src="assets/imgs/logo waypool-01 (1).png" alt="logo">\n    </div>\n</ion-header>\n\n<ion-content class="bg-background-img">\n    <div class="bg-white">\n        <h4 class="text-theme">Términos y Condiciones de <span class="text-theme2">WAYPOOL</span></h4>\n        <br/>\n        <h5 class="text-theme3">DESCRIPCIÓN GENERAL DE WAYPOOL</h5>\n        <p class="text-dark">“WAYPOOL” (que para efectos de este documento se le llamara “la aplicación”) es una aplicación móvil que ofrece el servicio de permitirle a sus usuarios la posibilidad de compartir su carro de uso personal con otros usuarios de la aplicación de manera voluntaria. Así mismo, le permite a los usuarios acceder a diferentes ofertas de transporte en la modalidad de carro compartido. El uso de esta aplicación debe hacerse de manera responsable. Es obligación y responsabilidad de los usuarios ingresar información completamente real en los formularios de registro, verificar las direcciones y rutas que se establezcan en cada uso de la aplicación y cumplir con los horarios que se pacten entre los usuarios. Al hacer uso de la aplicación se acepta recibir información por correo electrónico, mensaje de texto y/o redes sociales por parte exclusivamente de la empresa WAYPOOL S.A.S. (responsable de la aplicación).<span class="text-dark2">Para el caso de los usuarios oferentes de rutas de viaje, al ingresar los datos de tarjeta de crédito y hacer uso de la aplicación, aceptan que WAYPOOL S.A.S. cobre una tarifa por cada usuario solicitante de ruta de viaje a los cuales dicho usuario ofertante de ruta de viaje haya decidido llevar en su carro. La tarifa es del 20% del valor que el usuario ofertante de ruta de viaje haya decidido cobrar por usuario que llevó en su carro, sin embargo, puede que esta tarifa cambie, caso en el cual, WAYPOOL S.A.S. informará a sus usuarios con antelación de dicho cambio.</span></p>\n        <p class="text-dark">Al acceder y utilizar este servicio, usted acepta y accede a estar obligado por los términos y disposiciones de este acuerdo. Asimismo, al utilizar estos servicios particulares de la aplicación, usted estará sujeto a toda regla o guía de uso correspondiente que se haya publicado para dichos servicios. Toda participación en este servicio constituirá la aceptación de este acuerdo.<span class="text-dark2" style="text-decoration: underline" style="text-decoration-color: black">Si no acepta cumplir con lo anterior, por favor abstenerse de utilizar la aplicación.</span></p>\n        <br>\n        <h5 class="text-theme3">RESPONSABILIDAD LEGAL DE LAS PARTES</h5>\n        <p class="text-dark">Los usuarios de WAYPOOL son personas naturales, ya sean mayores o menores de edad (a partir de los 15 años de edad), las cuales tienen la posibilidad de ofertar y/o solicitar rutas de viaje a voluntad, especificando a detalle estas rutas en la aplicación. Los usuarios solicitantes de rutas de viaje, al ingresar en un proceso de viaje (cuando el dueño del carro acepta llevar a dicho usuario), están en la obligación de pagar al dueño del carro la totalidad de la tarifa que éste solicitó y que se le informó al usuario ANTES de iniciar el viaje. Dicha tarifa se debe pagar en efectivo. </p>\n        <p class="text-dark">La aplicación se compromete a facilitar los medios tecnológicos y virtuales necesarios para que el proceso de conexión entre los usuarios solicitantes u oferentes de rutas de viaje sea lo más transparente y seguro posible. </p>\n        <br>\n        <h5 class="text-theme3">USO RESPONSABLE DE LA APLICACIÓN</h5>\n        <p class="text-dark">Los usuarios de la aplicación son responsables por la información de las rutas que suministran a la aplicación para que esta realice el proceso de conexión entre dichos usuarios. De igual forma, cada usuario está en la obligación de respetar a otros miembros de la comunidad de WAYPOOL, absteniéndose de hacer comentarios racistas, misógino, homofóbico u ofensivo. Asimismo, los usuarios se comprometen a abstenerse de suministrar información falsa con respecto a datos personales y direcciones de rutas y de suplantar la información de otras personas, ya sean usuarios o no de la aplicación. </p>\n        <br>\n        <h5 class="text-theme3">PROHIBICIONES DE USO</h5>\n        <p class="text-dark">WAYPOOL está en la disposición de betar y prohibir el uso de la aplicación a un usuario si la empresa determina que dicho usuario ha violado alguna de las siguientes disposiciones: </p>\n        <p class="text-dark" style="margin-left: 30px;">1. Dar uso comercial de datos o información suministrada por parte de la aplicación .\n            2. Emitir amenazas, opiniones irrespetuosas, racistas, misóginas, homofóbicas o discriminatorias en contra de otros usuarios, ciudadanos o terceros.\n            3. Dañar el buen nombre de la aplicación a partir de declaraciones calumniadoras y falsas, haciendo que terceros se abstengan de hacer uso de la aplicación.\n            4. Suplantar la información de terceros o de sus cuentas relacionadas. Asimismo emitir información falsa.\n            5. Acceder a información, bases de datos, imágenes, audios, y todo tipo de material exclusivo de la aplicación por métodos de hackeo, ingeniería inversa u otro tipo de método.\n            6. Hacer uso de robots u otro tipo de mecanismos que permitan extraer, almacenar y manipular la información de la aplicación.\n            7. Hacer uso indebido de la aplicación que haga que esta pierda eficiencia, eficacia y rapidez.\n            </p>\n        <br>\n        <h5 class="text-theme3">ASPECTOS RELACIONADOS CON ASUNTOS TÉCNICOS Y OPERATIVOS DE LA APLICACIÓN</h5>\n        <p class="text-dark">Para todo aquel que haga uso de la aplicación debe tener en cuenta los siguientes aspectos: </p>\n        <p class="text-dark">1. A pesar de que toda la información sensible suministrada por los usuarios a la aplicación será tratada con los mayores estándares de seguridad informática, el usuario debe ser consciente de que la aplicación, al ser un producto digital, puede estar sujeta a delitos informáticos y de hackeo que puede afectar a dicho usuario. Se recomienda hacer uso de un password que cumpla con las medidas mínimas de seguridad.\n            2. Los usuarios que ofertan las rutas de viaje son los únicos responsables del cumplimiento de la ruta y los horarios pactados con los usuarios solicitantes. En caso de algún incumplimiento por parte de un usuario ofertante de ruta de viaje, la aplicación estará a disposición de tomar medidas para que ese caso no se repita.\n            3. Los usuarios que solicitan las rutas de viaje son los únicos responsables del cumplimiento de la aceptación y pago de la tarifa que el usuario ofertante estableció. En caso de algún incumplimiento por parte de un usuario solicitante de ruta de viaje, la aplicación estará a disposición de tomar medidas para que ese caso no se repita.\n            4. Durante las primeras horas posteriores al lanzamiento el servicio a través de dispositivos móviles puede no funcionar correctamente, de lo cual se dará aviso. Por favor enviar correo a <span class="text-theme2">waypooltec@gmail.com</span> en caso de fallas o errores.\n            5. El usuario debe notificar al correo <span class="text-theme2">waypooltec@gmail.com</span> en el momento en que se dan cuenta de una violación de su cuenta. \n            6. El usuario está a disposición de ampliar, reducir, modificar y definir la información del perfil de su cuenta según sea su voluntad.\n            </p>\n        <br>\n        <h5 class="text-theme3">CAMBIOS EN LA FUNCIONALIDAD DE LA APLICACIÓN</h5>\n        <p class="text-dark">La aplicación estará siempre en constante mejora de sus funcionalidades, por lo cual las funcionalidades de la aplicación pueden ser modificadas en cualquier momento a disposición de WAYPOOL. Los cambios serán basados en las necesidades de los usuarios, quejas o requerimientos de estos.  </p>\n        <p class="text-dark">Por lo anterior, los presentes términos y condiciones también podrán cambiar en cualquier momento, para lo cual WAYPOOL S.A.S. se compromete a dar previo aviso de los cambios.  </p>\n        <br>\n        <h5 class="text-theme3">POLÍTICA DE PRIVACIDAD</h5>\n        <p class="text-dark">WAYPOOL cree que la privacidad y el correcto manejo de datos personales sensibles es indispensable para el éxito de los productos digitales como este. A continuación se explicará qué datos recolecta la aplicación de parte de sus usuarios, la manera en la que lo hace y el manejo que se le dan a dichos datos internamente. Si tienes alguna duda acerca de cómo tus datos están siendo administrados y manejados por parte de WAYPOOL S.A.S. por favor escríbenos a <span class="text-theme2">waypooltec@gmail.com</span>.  </p>\n        <h6 class="text-theme3">QUÉ INFORMACIÓN PERSONAL RECOLECTAMOS</h6> \n        <p class="text-dark">WAYPOOL recolecta tu nombre, apellido, número de teléfono, correo electrónico universitário. Para el caso de los usuarios que registran sus carros también se les solicita modelo del carro, color del carro, placa del carro, foto de licencia de conducir, foto de la cédula y tarjeta de crédito. Con esta información se te asignará un código único de usuario y tu podrás escoger tu contraseña.  </p>\n        <p class="text-dark">Por otro lado puede que WAYPOOL S.A.S. guarde tus datos historicos de uso de la aplicación, los cuales son datos no sensibles. </p>\n        <h6 class="text-theme3">CÓMO USAMOS TU INFORMACIÓN PERSONAL  </h6> \n        <p style="text-decoration: underline" style="text-decoration-color: black">usos internos </p>\n        <p class="text-dark">WAYPOOL recolecta tu nombre, apellido, número de teléfono, correo electrónico universitário. Para el caso de los usuarios que registran sus carros también se les solicita modelo del carro, color del carro, placa del carro, foto de licencia de conducir, foto de la cédula y tarjeta de crédito. Con esta información se te asignará un código único de usuario y tu podrás escoger tu contraseña.  </p>\n        <p class="text-dark2">Con relación a los cobros a los usuarios oferentes de rutas de viaje, estos cobros serán basados en el número de personas que estos han decidido llevar en sus carros y en la tarifa que ellos mismos escogieron cobrar a los usuarios que llevaron. Los pagos se harán semanalmente y se te notificará cada vez que se haga un cobro (en caso de que no hayas llevado a ningún usuario en tu carro, es decir, no hayas hecho uso de la aplicación, no se te cobrará absolutamente nada). En caso de que hayas recibido un cobro que consideres injusto o irracional es tu deber como usuario comunicarte con nosotros  lo más rápido posible después del incidente mediante la aplicación o por correo (<span class="text-theme2">waypooltec@gmail.com</span>) para así analizar tu caso y si es el caso devolverte el cobro.</p>\n        <p class="text-dark">Usaremos tus datos históricos de uso de la aplicación para hacer estudios internos en términos demográficos, de uso de la aplicación, de intereses y comportamientos generales de nuestros usuarios. Esto lo hacemos con el fin de poder mejorar nuestra aplicación cada vez y adaptarla a la medida de las necesidades de nuestros usuarios.  </p>\n        <p style="text-decoration: underline" style="text-decoration-color: black">revelación de tu datos personales a terceros  </p>\n        <p class="text-dark">WAYPOOL no revelará tu información personal a ningún tercero ( excepto los posibles contratistas que WAYPOOL decida contratar para que presten servicios a WAYPOOL con fines operativos de la propia aplicación. La posible información que se provea a estos contratistas será limitada y ellos estarán en la obligación legal de mantenerla confidencial) a no ser de que tu como usuario nos permitas explícitamente hacerlo, por motivos legales debamos hacerlo (por ejemplo en respuesta a una orden legal judicial) o porque sea necesario para proteger nuestro producto digital, la aplicación. WAYPOOL puede que provea información sobre el uso general de la aplicación, pero en ningún momento se revelarán tus datos personales sensibles.  </p>\n        <p style="text-decoration: underline" style="text-decoration-color: black">cómo protegemos tu información  </p>\n        <p class="text-dark">Nos esforzamos en mantener realmente tu información segura. Usamos el producto de Google llamado FIREBASE para llevar a cabo todas nuestras actividades de almacenamiento y procesamiento de datos, por lo cual estos procesos se llevan a cabo según los más altos estándares diseñados por Google, de hecho, Google lo hace por nosotros.   </p>\n        <p class="text-dark">Nuestro servicio de almacenamiento y procesamiento de datos cuenta con las certificaciones ISO 27001 y SOC 1, SOC 2 y SOC 3 de manejo de datos personales, los cuales son estándares internacionales.   </p>\n        <p class="text-dark"> No podremos proteger la información que te enviemos o nos envíes por correo ya que por ser un servicio aparte, no es posible brindarle la seguridad necesaria, por lo cual debes abstenerte de pasar información sensible por correo en TODOS los casos, NUNCA te pediremos información sensible por este medio. </p>\n        <p class="text-dark">Aclaramos que ningún contratista ni empleado de WAYPOOL tendrá acceso a tus datos personales, al no ser que tenga autorización por parte de nosotros. Estas autorizaciones sólo se le darán a aquellos empleados o contratistas que tengan un motivo relacionado con la operación de WAYPOOL S.A.S para ejecutar su trabajo. </p>\n        <p style="text-decoration: underline" style="text-decoration-color: black">cómo nos puedes tu mismo ayudar a proteger tu información</p>\n        <p class="text-dark">Al momento de registrarte en la aplicación por favor usa un password que no sea parecido a tu nombre ni a tu correo y por ningún motivo divulgues tu password a nadie. Jamás te solicitaremos tu password por ninguna llamada o correo que tu no solicites. Recuerda que es más seguro si cada vez que termines de usar la aplicación cierres sesión.</p>\n        <p style="text-decoration: underline" style="text-decoration-color: black">rectificación, cancelación, eliminación de tus datos personales </p>\n        <p class="text-dark">Tu eres el dueño de tu propia información, por lo cual en el momento que desees podrás voluntariamente tomar la decisión de solicitar una rectificación, eliminación o cancelación de tus datos personales o del tratamiento de estos. En la aplicación hay una opción para eliminar tu cuenta, con lo cual automáticamente destruiremos todos tus datos. Si tienes alguna pregunta, duda u objeción envíanos un correo a <span class="text-theme2">waypooltec@gmail.com</span></p>\n        <br>\n        <h5 class="text-theme3">DOMICILIO CONTRACTUAL Y LEY APLICABLE </h5>\n        <p class="text-dark">Para todos los efectos, de acuerdo con el artículo 85 del Código Civil colombiano, las partes eligen como domicilio contractual la ciudad de Bogotá, Colombia. Asimismo, para todos los efectos los presentes términos y condiciones se rigen por la ley colombiana.</p>\n        <h5 class="text-theme3">USO DE LA INFORMACIÓN POR PARTE DE LOS USUARIOS  </h5>\n        <p class="text-dark">Los usuarios están en la libertad de compartir de manera gratuita toda la información que reciban por cualquier medio por parte de la aplicación siempre y cuando no sea para uso comercial y se reconozcan los derechos de autor de la aplicación a WAYPOOL S.A.S..  </p>\n        <p class="text-dark">TODO el material gráfico, fotográfico, escrito, de diseño gráfico, marcas, software y la aplicación como un todo están protegidas por la Ley 23 de 1982 de Colombia y los tratados internacionales sobre la protección  los Derechos de Autor. Queda prohibido emular, copiar o reproducir ilegalmente cualquier funcionalidad o material de la aplicación. Estos Términos y Condiciones están hechos bajo el marco de la ley colombiana, por ende cualquier cambio en estos debido a algún cambio hecho a la aplicación de WAYPOOL S.A.S será notificado con antelación a la fecha de su entrada en vigencia.  </p>\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/juandavidjaramillo/Documents/waypoolapp_UNOFICIAL/waypool_driver/src/pages/terms/terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ })

});
//# sourceMappingURL=7.js.map