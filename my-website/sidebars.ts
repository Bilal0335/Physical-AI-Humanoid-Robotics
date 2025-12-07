import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'principles', // Our project constitution
    {
      type: 'category',
      label: 'Module 1: ROS 2 (Robot Nervous System)',
      link: {
        type: 'generated-index',
        title: 'Module 1: ROS 2 Overview',
        description: 'Learn the fundamentals of ROS 2 for robotic systems.',
        slug: '/module1',
      },
      items: [
        'module1-ros2-nervous-system/chapter1_ros2_basics',
        'module1-ros2-nervous-system/chapter2_rclpy_agents',
        'module1-ros2-nervous-system/chapter3_urdf_humanoids',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      link: {
        type: 'generated-index',
        title: 'Module 2: Digital Twin Overview',
        description: 'Explore robotic simulation with Gazebo and Unity.',
        slug: '/module2',
      },
      items: [
        'module2-digital-twin-gazebo-unity/chapter1_gazebo_physics',
        'module2-digital-twin-gazebo-unity/chapter2_unity_integration',
        'module2-digital-twin-gazebo-unity/chapter3_simulating_sensors',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      link: {
        type: 'generated-index',
        title: 'Module 3: AI-Robot Brain Overview',
        description: 'Dive into advanced perception and navigation with NVIDIA Isaac.',
        slug: '/module3',
      },
      items: [
        'module3-ai-robot-brain-isaac/chapter1_isaac_sim',
        'module3-ai-robot-brain-isaac/chapter2_isaac_ros_nav',
        'module3-ai-robot-brain-isaac/chapter3_nav2_humanoids',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      link: {
        type: 'generated-index',
        title: 'Module 4: VLA Overview',
        description: 'Understand how LLMs, perception, and ROS 2 integrate for intelligent robot behaviors.',
        slug: '/module4',
      },
      items: [
        'module4-vision-language-action/chapter1_whisper_vta',
        'module4-vision-language-action/chapter2_llm_planning',
        'module4-vision-language-action/chapter3_vla_pipeline',
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project',
      link: {
        type: 'generated-index',
        title: 'Capstone Project Overview',
        description: 'The final integrated project: Voice → Plan → Navigate → Detect → Manipulate.',
        slug: '/capstone',
      },
      items: [
        'capstone-project/introduction', // Placeholder for capstone intro
      ],
    },
  ],
};

export default sidebars;