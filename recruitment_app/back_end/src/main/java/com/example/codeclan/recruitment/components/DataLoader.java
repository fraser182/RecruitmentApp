package com.example.codeclan.recruitment.components;

import com.example.codeclan.recruitment.models.Job;
import com.example.codeclan.recruitment.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    JobRepository jobRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){

        Job softwareDev = new Job("JP Morgan", "declan06023@hotmail.com",
                "011241131", "Joesph", "Software Developer",
                "24,000", "Glasgow", "www.google.com",
                "We are committed to ensuring that all job applicants are treated equally," +
                " without discrimination because of gender, sexual orientation, marital or civil partner status, gender reassignment," +
                " race, colour, nationality, ethnic or national origin, religion or belief, disability or age.", "JavaScript",
                "Your team is looking to have someone who is committed and passionate but also looking to have a good time.",
                "You will be responsible for maintaining and extending the company's core flagship cloud-based product. " +
                        "You would be working within the backend team & therefore " +
                        "you'll have involvement in all aspects of design and development.",
                "2 years of JavaScript and SQL Knowledge",
                "Software Developer", "Senior", "Full-Time");
        jobRepository.save(softwareDev);
        Job backEndDev = new Job("Spotify", "person123@gmail.com",
                "013241231", "Megan", "Software Engineer - CoreX Backend",
                "30,000", "London", "www.spotify.com",
                "Innovation, collaboration, transparency, passion, and playfulness are a start." +
                        " We believe our culture is a core part of what makes Spotify successful." +
                        " We’re looking for someone who understands a good culture" +
                        " and will help shape it as it evolves.", "Java/iOS/Android",
                "You will join a team where everyone shares a common interest in building" +
                        " apps on different platforms and work on distributed backend systems," +
                        " their scalability, and continued development. Together we try to find new" +
                        " ways to create a great Spotify experience for all our users at all times." +
                        " Above all, your work will impact the way the world experiences music.",
                "As a mobile & backend engineer you will be instrumental in building the next " +
                        "generation mobile interface. This is a chance to work on a distributed " +
                        "microservices architecture, building services for high volume traffic " +
                        "and build scalable systems.", "3+ years of Java", "Software Developer",
                "Mid-Level", "Full-Time");
        jobRepository.save(backEndDev);
        Job tester = new Job("Big Pixel Studios", "jeses@bigpixelstudios.co.uk",
                "01413237434", "Jeses", "QA Tester",
                "28,000", "Glasgow", "www.bigpixelstudios.co.uk/",
                "We are passionate about gaming and creating fun and interactive products", "Swift",
                "You will be working with a professional team who are passionate about technology and work on " +
                        "cutting-edge projects.",
                "As an embedded tester, helping to build a new QA department within an experienced London based studio, " +
                        "you’ll take ownership of significant elements of testing in our games as well as being an excellent communicator " +
                        "with strong people and technical skills. " +
                        "you'll have involvement in all aspects of design and development.",
                "Knowledge of iOS and Android Family of devices and mobile submission process and knowledge of F2P",
                "Tester", "Junior", "Full-Time");
        jobRepository.save(tester);

    }


}
