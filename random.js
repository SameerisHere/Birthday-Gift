var facts = [
                'The show\'s title comes from a real medical textbook. The anatomy book \'Gray\'s Anatomy,\' written by Henry Gray, is still in print today.',
                'It was \'Doctors\' and then \'Surgeons\' and then \'Complications\' before Grey\'s Anatomy',
                'After over 300 episodes, Ellen Pompeo (Meredith Grey), Chandra Wilson (Miranda Bailey), and James Pickens Jr. (Richard Webber) are the only original leads who are still on the series.',
                'Until the show\'s medical the advisors fill in the actual medical terms, the writers just put \'medical medical\' as placeholder text in the script',
                'They use cow organs and fake blood made up of chicken fat and red gelatin',
                'Grey\'s Anatomy scrubs are used in real hospitals.',
                'Every episode of Grey\'s Anatomy is named after a song—except one. The episode titled 1-800-799-7233 has been the only exception',
                'In the original 1954 movie, Godzilla\'s iconic roar was produced by rubbing a pine tar-coated leather glove over a double bass string.',
                'Godzilla was originally going to be a giant, mutated octopus.',
                'During an action sequence in 1964\'s Godzilla vs. Mothra, the Godzilla suit accidentally caught on fire.',
                'In 1992, A Godzilla suit was stolen, then lost, then randomly washed ashore',
                'Paleontologist Kenneth Carpenter named a Triassic dinosaur after godzilla in 1997, known as Gojirasaurus quayi.',
                'Godzilla has a star on the Hollywood Walk of Fame.',
                'Godzilla Can Fly With His Atomic Breath',
                'Sushi Rice Was Once Considered Trash',
                'The Term ‘Sushi’ actually Refers to the Rice',
                'People were able to use sushi as a form of currency. Sushi was once highly prized that people were allowed to use it to pay taxes in AD 8th century Japan',
                'California was the first US state to embrace sushi',
                'Sushi chefs train for over 10 years to become a master'
]

function randFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById("factDisplay").innerHTML = facts[randFact];
}


