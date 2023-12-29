import { AskQuestion } from '@/components/AskQuestion'
import { Comments } from '@/components/Comments'
import { CodeBlock } from '@/components/Code'
import { Explain } from '@/components/Explain'

const code1 = `<p>Going freelance means...</p>

<p>The first step is...</p>

<p>I'm not a fan...</p>`

const code2 = `p {
  margin: 24px 0 24px 0;
}`

const code3 = `p {
  margin: 24px 24px 24px 24px;
}`

const code4 = `p {
  margin: 24px;
}`

export default function Home() {
  return (
    <article>
      <AskQuestion>
        <h1>Creating Randomness</h1>
        <a href="https://medium.com/cantors-paradise/creating-randomness-eb512756c9c7">Full article on Medium</a>
        <Explain>
          
            
          <p>
            Human civilization and the unpredictable have long been connected. 
            Early humans were interested in randomness as a way to predict their futures. 
            These techniques slowly evolved into games of chance and as tools for government work. 
            With the Enlightenment came a whole new set of uses for randomness in describing scientific processes. 
            Clearly, humans have many uses for generating random numbers.
          </p>
          <p>
            But what does a random number actually mean? Here&rsquo;s a wordy formal definition from Wolfram MathWorld. 
            Don&rsquo;t worry if some of it goes over your head, I&rsquo;ll explain it afterwards.</p>
          <p>
            A random number is a number chosen as if by chance from some specified distribution 
            such that the selection of a large set of these numbers reproduces the underlying
             distribution. Almost always, such numbers are also required to be independent, 
            so that there are no correlations between successive numbers.
          </p>
        </Explain>

  

        <Explain>
          <p>
            This is a lot of content, but it basically boils down to this: 
            a random number cannot be predicted. However, we can usually make a claim about which 
            numbers are more likely than others. For example, I can say with 100% confidence that 
            the number 7 will not be rolled on a standard six-sided die. 
            Even though rolling a die is random, it still follows certain constraints. 
            Many random numbers follow a distribution which tells us the probability of each outcome. 
            Even knowing the distribution makes it impossible to predict an individual event.
          </p>

          <p>
            Say you are rolling a die, and you&rsquo;ve rolled a 1 three times in a row. 
            Wow, that&rsquo;s a pretty rare outcome! There&rsquo;s no way you&rsquo;ll 
            roll another 1 next time, right? A key factor of randomness is that the probability
             of rolling a 1 is the exact same no matter how many times a 1 has been rolled previously. 
             This is probably the hardest aspect of randomness to intuitively understand, 
             it seems to go against common sense. Even after rolling three 1s, 
             the likelihood of rolling a 1 again remains the same.
            For a process to truly be random, it must follow this rule.
          </p>
        </Explain>

  

        <Explain>
          <p>
            A distribution does not need to be evenly split. 
            If you’ve ever played the game Settlers of Catan, then you are very familiar with this fact. 
            Instead of just using one die, let’s roll two dice and add their results together.
          </p>
        </Explain>

     

        <p>
          I’ve been using dice for my examples so far, and there’s a good reason for that. 
          We have records of humans using dice going back at least 5000 years! 
          They have been a mainstay of divination, casual games, and gambling since civilization 
          has existed. 
          Let’s spend some time talking about the history of dice.
        </p>

        <h2>The First Random Numbers</h2>

        <Explain>
          <p>
            We have many sources of evidence pointing to dice used in ancient history. The Bible mentions dice several times, usually translated as “casting lots.” Early dice were often made from bones or clay and commonly show up in archaeological dig sites. Dice are functionally random due to the many minor variations that go into throwing them. Because there is so much uncertainty in the exact way your hand moves to roll them, as well as the layout of air molecules at the time, it is essentially impossible to predict its outcome.
          </p>
        </Explain>

        <Explain>
          <p>
            By far the most common type of die is the standard cube, but there are many more types. If you’ve ever played Dungeons and Dragons (a favorite of mine) or another board game, then you are probably familiar with other types of die. Most of these die are Platonic Solids, which have nice properties that lend well to randomness. The exception to this in most sets of dice is the ten-sided die formed by kites. 
            Often, two of these dice are paired to generate random numbers between 1 and 100.
          </p>
        </Explain>

        <Explain>
          <p>
            Dice can get weirder though, much weirder! My personal favorite is the Möbius strip strip die which can be used to generate only the number 1 (just a joke). People have come up with all sorts of ways to create different types of dice. Early dice were made from bones and had weird shapes, but still were able to effectively create random numbers.
          </p>
        </Explain>

        <Explain>
          <p>
            We know that randomness exists in much more profound ways. Even though humans have come up with useful tools for simulating it, nature has its own techniques. Large-scale processes such as evolution rely on a massive amount of randomness to occasionally produce beneficial mutations, but uncertainty also exists at the smallest level. We’ve only begun to scratch the surface of these phenomena; let’s talk about the basics.

          </p>
        </Explain>
        <h2>Quantum Randomness</h2>
        <Explain>
          <p>
            Around 100 years ago, physicists made a startling discovery. They slowly began to realize that if they go deep enough, certain physical processes are purely random. Many experiments have been conducted to certify that this is true randomness. Scientists at the time did not like this discovery as it went directly against the classical physics of the last couple of centuries. Most notably upset by this was Einstein, you may have heard this quote addressing the topic:

            “God does not play dice”
          </p>
        </Explain>

        <Explain>
          <p>
            Believe it or not, this is actually a misquote. He really said the following, which I find much more interesting.

            “[t]he theory produces a good deal but hardly brings us closer to the secret of the Old One. I am at all events convinced that He does not play dice.

            Einstein rejected the random view of quantum physics, but he has been continually proven wrong. The randomness of fundamental matter has some interesting implications that scientists are still continuing to grapple with. There is something unsettling, and also comforting, about the discovery that we do not live in a clockwork universe. Let’s consider the following example to see how this works.
          </p>
        </Explain>

        <Explain>
          <p>
            If you’ve taken physics before, then you may be familiar with a beam splitter. This is a common tool used to divide one laser into multiple beams, each at a lower intensity. But say we were to lower the input of the beam dramatically. So much so that one individual photon hits the beam at a time. Even if you had perfect information, it is impossible to predict which way the photon will travel once it hits the beam splitter.

          </p>
        </Explain>

        <Explain>
          <p>
            At this level, we are seeing one of the only examples of true pure randomness. If we had perfect information about how your hand moved and the air, then in theory we would be able to predict how a die would roll through extremely complicated equations. This is not the case for a beam splitter. There is no amount of information that would tell us the outcome.

            </p>
        </Explain>

        <Explain>
          <p>
            One thing to remember with margins is that the gap between two tags is an overlap not an
            addition. For example, if we have two paragraphs, each with 24 pixels margin, the gap
            between them is 24px, not 48px. However, if we have a header with a 36 pixel margin next
            to a paragraph with just a 24 pixel margin, the gap between the two tags would be the
            maximum of the two, so in this case, 36px.
          </p>
        </Explain>

        <Explain>
          <p>
            Physics has many other examples like this, another one occurs in radioactive decay. Even though we have a good idea of on average how quickly an atom will decay, it is impossible to predict each individual beta particle being emitted. Just like with the dice, the previous events have no impact on when the next particle will decay, there is only a predicted distribution of results.

            Scientists have wanted to simulate processes like the ones described above on computers for research purposes. While a coin toss or dice may work for a few examples, sometimes we want to simulate many random events like in the plots I showed at the beginning of this article. We have a problem though, computers are purely deterministic, so what do we do?


            
          </p>
        </Explain>

        <Explain>
          <p>
            Getting More Sophisticated
            There are two main methods that computers will use to generate random numbers. The most common one is something called pseudo-randomness. These algorithms begin with a number called a seed (a familiar term for Minecraft players). This is a beginning number used to create the other numbers and usually comes from the millisecond value stored in the computer at the time of running. The algorithm takes the seed number and plugs it into an equation over and over again. This results in a long string of random numbers produced by the equation.

            Pseudorandom numbers are practical and somewhat easy to create, but they have problems. The sequence will almost certainly repeat itself after a while (usually on the order of millions of repetitions). There is also the problem that if someone knows the seed and equation, they can reproduce every single random number that is output. This usually means pseudorandom numbers are insufficient for cryptography purposes, but if enough extra work is done they can become much more safe.

            Far more interesting, but complicated, are methods that rely on natural sources of randomness. These sources are technically not perfectly random because they could be predicted if we had enough information, but our computational power is nowhere close to being able to do this. Once the data is collected, an algorithm can use it to provide a truly random sequence of numbers. This is more work, but much more foolproof than the pseudo-random method described earlier.


            Lightning is the primary source of atmospheric noise (Source)
            My favorite expression for this is “harvesting entropy.” Some common sources include atmospheric noise, Brownian motion, electronic circuit noise, and the two physical processes I mentioned above. People have come up with many cool techniques for this method, and I have some more examples linked below.

            The study of randomness and how to create it remains a highly active area of research. The increased dominance of computers in every aspect of our lives makes randomness a more and more essential tool.

            Going Further
            I hope you learned something! Randomness has played an essential part in nature, and humans have been taking advantage of randomness for as long as we have been around. If you are interested in going further, I have a few links below for you to check out.

            RANDOM.org is an amazing site all about randomness. They have many useful random number generators and talk a lot about where they get their data. A similar site, LavaRnd.org, uses lava lamps to generate their random numbers!
            If you want a formal textbook introduction into probability, I highly recommend Probability: for the Enthusiastic Beginner.
            To see a cool shop with many unique dice, check out this page.
            The Stanford Encyclopedia of Philosophy has a great page on the difference between Chance and Randomness which is a very interesting and informative read.
            I also have some similar articles to this one that you may be interested in, check them out!

          </p>
        </Explain>

        {/* ask question panel gets added within the component at the bottom */}
      </AskQuestion>

      {/* insert the comments */}
      <Comments />
    </article>
  )
}
