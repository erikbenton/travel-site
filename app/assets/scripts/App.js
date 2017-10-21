import $							from "jquery";
import MobileMenu 		from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader		from "./modules/StickyHeader";

var mobileMenu 	= new MobileMenu();
var featureItem = new RevealOnScroll($(".feature-item"), "85%");
var testimonial = new RevealOnScroll($(".testimonial"), "65%");
var stickHeader = new StickyHeader();