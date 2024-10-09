"use client";

import Link from "next/link";
import { useState } from 'react';

const Aboute = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col min-h-screen bg-fuchsia-400" style={{ backgroundImage: "url('/images/image11.png')" }}>
      {/* Header */}
      <div>
        <header className="min-w-screen min-h-8 shadow-white">
          <nav className="bg-none flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-white">List OF Items</h1>
            <Link href="/" className="text-white font-bold text-xl mx-4 drop-shadow-lg" style={{ textShadow: "2px 2px 4px black" }}>
              Go to Home ↩
            </Link>
          </nav>
        </header>
      </div>

      <div className="text-center mt-10 text-white text-bold text-2xl"><h1>Open each item and Read for more information 📃</h1></div>

      {/* Section 1 */}
      <div className="mt-4 pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(1)}
        >
          1. Understanding Sleep and Stress
        </h2>
        {openSection === 1 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">The Science of Sleep: </span>
              Explain the different sleep stages (REM and non-REM), sleep cycles, and why each stage is important for physical and mental health.
            </li>
            <li>
              <span className="font-bold">The Impact of Stress on Sleep: </span>
              Discuss how stress affects the body, leading to issues like insomnia, poor sleep quality, and disrupted sleep cycles.
            </li>
            <li>
              <span className="font-bold">Connection Between Sleep and Mental Health: </span>
              Highlight how poor sleep can worsen stress, anxiety, and depression, creating a vicious cycle.
            </li>
          </ul>
        )}
      </div>

      {/* Section 2 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(2)}
        >
          2. Common Sleep Disorders
        </h2>
        {openSection === 2 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Insomnia: </span>
              Define insomnia, its causes, and symptoms. Offer potential solutions like cognitive-behavioral therapy for insomnia (CBT-I) and lifestyle adjustments.
            </li>

            <li>
              <span className="font-bold">Sleep Apnea: </span>
              Discuss symptoms of sleep apnea (e.g., snoring, gasping for air) and treatments like CPAP machines or weight management.
            </li>
            <li>
              <span className="font-bold">Restless Leg Syndrome (RLS): </span>
              Explain RLS and how it affects sleep. Offer remedies such as exercise or medication.
            </li>
            <li>
              <span className="font-bold">Circadian Rhythm Disorders: </span>
              Discuss jet lag, shift work, and delayed sleep phase syndrome, and how these can affect sleep patterns.
            </li>
          </ul>
        )}
      </div>

      {/* Section 3 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(3)}
        >
          3. Stress Management Techniques
        </h2>
        {openSection === 3 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Mindfulness and Meditation: </span>
              Explain how mindfulness practices, guided meditation, and breathing exercises can reduce stress and improve sleep.
            </li>

            <li>
              <span className="font-bold">Progressive Muscle Relaxation (PMR): </span>
              Provide a step-by-step guide to practicing PMR to relieve tension and prepare the body for rest.
            </li>
            <li>
              <span className="font-bold">Time Management and Prioritization: </span>
              Offer tips for managing work, personal tasks, and avoiding overwhelm, which can lead to chronic stress.
            </li>
            <li>
              <span className="font-bold">Journaling for Stress Relief: </span>
              Encourage readers to keep a journal to document worries and offload stress, improving mental clarity before bedtime.
            </li>
          </ul>
        )}
      </div>

      {/* Section 4 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(4)}
        >
          4. Tips for Better Sleep
        </h2>
        {openSection === 4 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Establishing a Sleep Routine: </span>
              Explain the importance of going to bed and waking up at the same time every day. Offer tips for developing a healthy bedtime routine (e.g., reading, dimming lights, avoiding screens).
            </li>

            <li>
              <span className="font-bold">Creating a Sleep-friendly Environment: </span>
              Suggest improvements to the bedroom environment (e.g., using blackout curtains, cool temperatures, white noise machines).
            </li>
            <li>
              <span className="font-bold">Limiting Stimulants and Screen Time: </span>
              Discuss how caffeine, alcohol, and exposure to blue light from screens before bed can negatively impact sleep quality.
            </li>
            <li>
              <span className="font-bold">Diet and Sleep: </span>
              Provide information about foods and beverages that promote better sleep (e.g., chamomile tea, bananas, almonds) versus those that should be avoided at night.
            </li>
          </ul>
        )}
      </div>

      {/* Section 5 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(5)}
        >
          5. Sleep and Stress Management Tools
        </h2>
        {openSection === 5 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Apps and Gadgets:</span>
              Recommend sleep tracking apps (e.g., Sleep Cycle, Calm) and devices like smart sleep trackers, white noise machines, or weighted blankets.
            </li>
            <li>
              <span className="font-bold">Breathing Techniques for Sleep:</span>
              Share breathing exercises like the 4-7-8 method to calm the mind and body before bedtime.
            </li>
            <li>
              <span className="font-bold">Guided Meditation Resources: </span>
              Provide links to guided meditations or create your own audio meditations that visitors can listen to for relaxation.
            </li>
          </ul>
        )}
      </div>

      {/* Section 6 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(6)}
        >
          6. Lifestyle Changes to Improve Sleep and Reduce Stress
        </h2>
        {openSection === 6 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Exercise: </span>
              Discuss how regular physical activity (especially aerobic exercise) can reduce stress levels and improve sleep quality. Mention that intense exercise close to bedtime might have the opposite effect.
            </li>
            <li>
              <span className="font-bold">Healthy Diet for Stress Management: </span>
              Offer dietary suggestions for managing stress, such as incorporating more whole foods, leafy greens, omega-3-rich foods, and avoiding sugary or highly processed foods.
            </li>
            <li>
              <span className="font-bold">Work-Life Balance: </span>
              Encourage healthy boundaries between work and personal life to prevent burnout and chronic stress, leading to better sleep.
            </li>
            <li>
              <span className="font-bold">Napping: </span>
              Provide guidance on how to take effective power naps without disrupting nighttime sleep patterns.
            </li>
          </ul>
        )}
      </div>

      {/* Section 7 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(7)}
        >
          7. Addressing Stress at Work
        </h2>
        {openSection === 7 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Stress Management in the Workplace: </span>
              Offer tips on managing workplace stress, such as setting priorities, using the Pomodoro Technique for time management, and taking regular breaks.
            </li>
            <li>
              <span className="font-bold">Mindful Breaks: </span>
              Discuss the benefits of taking short mindfulness breaks during work to reduce stress.
            </li>
            <li>
              <span className="font-bold">Creating a Stress-Free Work Environment: </span>
              Offer suggestions on decluttering the workspace, using ergonomic furniture, and incorporating natural light to reduce stress.
            </li>
          </ul>
        )}
      </div>

      {/* Section 8 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(8)}
        >
          8. Long-Term Strategies for Managing Stress
        </h2>
        {openSection === 8 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Therapeutic Approaches: </span>
              Discuss the role of therapy, such as cognitive-behavioral therapy (CBT), for managing chronic stress and anxiety.
            </li>
            <li>
              <span className="font-bold">Developing Resilience: </span>
              Share tips on building mental and emotional resilience through positive thinking, problem-solving, and self-care
            </li>
            <li>
              <span className="font-bold">Social Support: </span>
              Emphasize the importance of having a support system, such as friends, family, or support groups, to cope with stress.
            </li>
          </ul>
        )}
      </div>

      {/* Section 9 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(9)}
        >
          9. Expert Insights
        </h2>
        {openSection === 9 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Interviews with Sleep and Stress Experts: </span>
              Share interviews or guest blog posts from sleep doctors, psychologists, or wellness experts to give professional perspectives on sleep and stress management.
            </li>
            <li>
              <span className="font-bold">Research and Studies: </span>
              Include summaries or discussions of the latest research on sleep and stress, making scientific findings accessible to your readers.
            </li>
          </ul>
        )}
      </div>

      {/* Section 10 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(10)}
        >
          10. Product Recommendations
        </h2>
        {openSection === 10 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Supplements for Sleep:  </span>
              Supplements for Sleep: Discuss natural sleep aids like melatonin, valerian root, or magnesium, and their effectiveness.
            </li>
            <li>
              <span className="font-bold">Aromatherapy: </span>
              Recommend essential oils such as lavender, chamomile, and sandalwood that can promote relaxation and better sleep.
            </li>
            <li>
              <span className="font-bold">Mattresses and Pillows: </span>
              Mattresses and Pillows: Provide guidance on selecting the right mattress and pillow for better sleep posture and comfort.
            </li>
          </ul>
        )}
      </div>

      {/* Section 11 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(11)}
        >
          11. Sleep Challenges by Age Group
        </h2>
        {openSection === 11 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Children and Teen Sleep Issues: </span>
              Discuss the importance of sleep for children and teens, including challenges like school schedules, screen time, and growth-related sleep needs.
            </li>
            <li>
              <span className="font-bold">Sleep in Adults: </span>
              Sleep in Adults: Focus on the specific sleep challenges that adults face, such as work stress, parenting, and aging.
            </li>
            <li>
              <span className="font-bold">Senior Sleep Health: </span>
              Senior Sleep Health: Talk about how sleep changes as people age, and offer tips for improving sleep quality in seniors (e.g., staying active, avoiding long daytime naps).
            </li>
          </ul>
        )}
      </div>

      {/* Section 12 */}
      <div className="pl-5 pt-3">
        <h2
          className="text-2xl font-bold text-white mt-5 cursor-pointer"
          onClick={() => toggleSection(12)}
        >
          12. Real-Life Stories
        </h2>
        {openSection === 12 && (
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-3">
            <li>
              <span className="font-bold">Personal Experiences: </span>
              Share real-life stories about overcoming sleep issues and managing stress. You can encourage user-generated content or testimonials from your audience to build a community feel.
            </li>
            <li>
              <span className="font-bold">Case Studies: </span>
              Present case studies on how various techniques, routines, or treatments helped individuals improve their sleep and reduce stress.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Aboute;
