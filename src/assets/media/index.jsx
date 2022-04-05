import media1 from "../media/clientlogo_vivo.png";
import media2 from "../media/clientlogo_almap.png";
import media3 from "../media/clientlogo_ambev.png";
import media4 from "../media/clientlogo_dpzt.png";
import media5 from "../media/clientlogo_havaianas.png";
import media6 from "../media/clientlogo_havas.png";
import media7 from "../media/clientlogo_mccann.png";
import media8 from "../media/clientlogo_tecnisa.png";
import media9 from "../media/clientlogo_vmlyr.png";

export const media = [media1.src, media2.src, media3.src, media4.src, media5.src, media6.src, media7.src, media8.src, media9.src];
export const mediaByIndex = index => media[index % media.length];