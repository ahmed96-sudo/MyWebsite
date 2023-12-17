import Codingbest from "./Codingbest";
import Cybersecurity from "./Cybersecurity";
import Cyberthreats from "./Cyberthreats";
import Uxtips from "./Uxtips";
import Webdevelopment from "./Webdevelopment";
import Onlinesafety from "./Onlinesafety";

const Determinecontent = ({ title }) => {
    if (title == "Web Development Trends") {
        return (
                <Webdevelopment></Webdevelopment>
            )
    } else if (title == "Coding Best Practices") {
        return (
                <Codingbest></Codingbest>
            )
    } else if (title == "UX Design Tips") {
        return (
                <Uxtips></Uxtips>
            )
    } else if (title == "Cybersecurity Essentials") {
        return (
                <Cybersecurity></Cybersecurity>
            )
    } else if (title == "2024 Cyber Threats") {
        return (
                <Cyberthreats></Cyberthreats>
            )
    } else if (title == "Online Safety Tips") {
        return (
                <Onlinesafety></Onlinesafety>
            )
    }
}

export default Determinecontent;