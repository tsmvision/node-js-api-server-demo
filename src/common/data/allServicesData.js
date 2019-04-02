const allServicesData = [
  [
    {
      label: "Compute",
      link: "#",
      icon: ["fal", "print"],
      subMenu: [
        {
          label: "EC2"
        },
        {
          label: "Lightsail"
        },
        {
          label: "ECR"
        },
        {
          label: "ECS"
        },
        {
          label: "EKS"
        },
        {
          label: "Lambda"
        },
        {
          label: "Batch"
        },
        {
          label: "Elastic Beanstalk"
        },
        {
          label: "Serverless Application Repository"
        }
      ]
    },
    {
      label: "Storage",
      link: "#",
      icon: ["fal", "cabinet-filing"],
      subMenu: [
        {
          label: "S3"
        },
        {
          label: "EFS"
        },
        {
          label: "FSx"
        },
        {
          label: "S3 Glacier"
        },
        {
          label: "Storage Gateway"
        },
        {
          label: "AWS Backup"
        }]
    },
    {
      label: "Database",
      link: "#",
      icon: ["fal", "database"],
      subMenu: [
        {label: "RDS"},
        {label: "DynamoDB"},
        {label: "ElastiCache"},
        {label: "Neptune"},
        {label: "Amazon Redshift"},
        {label: "Amazon DocumentDB"}
      ]
    },
    {
      label: "Migration & Transfer",
      link: "#",
      icon: ["fal", "cloud-upload"],
      subMenu: [
        {label: "AWS Migration Hub"},
        {label: "Application Discovery Service"},
        {label: "Database Migration Service"},
        {label: "Server Migration Service"},
        {label: "AWS Transfer for SFTP"},
        {label: "Snowball"},
        {label: "DataSync"}
      ]
    },
    {
      label: "Network & Content Delivery",
      link: "#",
      icon: ["fal", "network-wired"],
      subMenu: [
        {label: "VPC"},
        {label: "CloudFront"},
        {label: "Route 53"},
        {label: "API Gateway"},
        {label: "Direct Connect"},
        {label: "AWS App Mesh"},
        {label: "AWS Cloud Map"},
        {label: "Global Accelerator"}
      ]
    }
  ],
  [
    {
      label: "Developer Tools",
      link: "#",
      icon: ["fal", "tools"],
      subMenu: [
        {
          label: "CodeStar"
        },
        {
          label: "CodeCommit"
        },
        {
          label: "CodeBuild"
        },
        {
          label: "CodeDeploy"
        },
        {
          label: "CodePipeline"
        },
        {
          label: "Code9"
        },
        {
          label: "X-Ray"
        }
      ]
    },
    {
      label: "Robotics",
      link: "#",
      icon: ["fal", "robot"],
      subMenu:
        [
          {
            label: "AWS RoboMaker"
          }
        ]
    },
    {
      label: "Blockchain",
      link: "#",
      icon: ["fal", "link"],
      subMenu: [
        {
          label: "Amazon Managed Blockchain"
        }
      ]
    },
    {
      label: "Satellite",
      link: "#",
      icon: ["fal", "satellite-dish"],
      subMenu: [
        {label: "Ground Station"}
      ]
    },

    {
      label: "Management & Governance",
      link: "#",
      icon: ["fal", "tasks-alt"],
      subMenu: [
        {label: "Management & Governance"},
        {label: "AWS Organizations"},
        {label: "CloudWatch"},
        {label: "AWS Auto Scaling"},
        {label: "CloudFormation"},
        {label: "CloudTrail"},
        {label: "Config"},
        {label: "OpsWorks"},
        {label: "Service Catalog"},
        {label: "Systems Manager"},
        {label: "Trusted Advisor"},
        {label: "Managed Body"},
        {label: "Control Tower"},
        {label: "AWS License Manager"},
        {label: "AWS Well-Architected Tool"},
        {label: "Personal Health Dashboard"}
      ]
    },
    {
      label: "Media Body",
      link: "#",
      icon: ["fal", "file-video"],
      subMenu: [
        {label: "Elastic Transcoder"},
        {label: "Kinesis Video Streams"},
        {label: "MediaConnect"},
        {label: "MediaConvert"},
        {label: "MediaLive"},
        {label: "MediaPackage"},
        {label: "MediaStore"},
        {label: "MediaTailor"}
      ]
    }
  ],
  [
    {
      label: "Machine Learning",
      link: "#",
      icon: ["fal", "brain"],
      subMenu: [
        {
          label: "Amazon SageMaker"
        },
        {
          label: "Amazon Comprehend"
        },
        {
          label: "AWS DeepLens"
        },
        {
          label: "Amazon Lex"
        },
        {
          label: "Machine Learning"
        },
        {
          label: "Amazon Polly"
        },
        {
          label: "Rekognition"
        },
        {
          label: "Amazon Transcribe"
        },
        {
          label: "Amazon Translate"
        },
        {
          label: "Amazon Personalize"
        },
        {
          label: "Amazon Forecast"
        },
        {
          label: "Amazon Textract"
        }
      ]
    },
    {
      label: "Analytics",
      link: "#",
      icon: ["fal", "analytics"],
      subMenu: [
        {label: "Athena"},
        {label: "EMR"},
        {label: "CloudSearch"},
        {label: "Elasticsearch Service"},
        {label: "Kinesis"},
        {label: "QuickSight"},
        {label: "Data Pipeline"},
        {label: "AWS Glue"},
        {label: "MSK"}
      ]
    },
    {
      label: "Security, Identity, & Compliance",
      link: "#",
      icon: ["fal", "shield-check"],
      subMenu: [
        {label: "IAM"},
        {label: "Resource Access Manager"},
        {label: "Cognito"},
        {label: "Secrets Manager"},
        {label: "GuardDuty"},
        {label: "Inspector"},
        {label: "Amazon Macie"},
        {label: "AWS Single Sign-On"},
        {label: "Certificate Manager"},
        {label: "Key Management Service"},
        {label: "CloudHSM"},
        {label: "Directory Service"},
        {label: "WAF & Shield"},
        {label: "Artifact"},
        {label: "Security Hub"}
      ]
    },
    {
      label: "AWS Cost Management",
      link: "#",
      icon: ["fal", "calculator"],
      subMenu: [
        {label: "AWS Cost EXplorer"},
        {label: "AWS Budget"},
        {label: "AWS Marketplace Subscriptions"}
      ]
    }
  ],
  [
    {
      label: "Mobile",
      link: "#",
      icon: ["fal", "mobile"],
      subMenu: [
        {
          label: "AWS Amplify"
        },
        {
          label: "Mobile Hub"
        },
        {
          label: "AWS AppSync"
        },
        {
          label: "Device Farm"
        }
      ]
    },
    {
      label: "AR & VR",
      link: "#",
      icon: ["fal", "head-vr"],
      subMenu: [
        {
          label: "Amazon Sumerian"
        }
      ]
    },
    {
      label: "Application Integration",
      link: "#",
      icon:
        ["fal", "cloud"],
      subMenu: [
        {label: "Step Functions"},
        {label: "Amazon MQ"},
        {label: "Simple Notification Service"},
        {label: "Simple Queue Service"},
        {label: "SWF"}
      ]
    },
    {
      label: "Customer Engagement",
      link: "#",
      icon: ["fal", "cloud"],
      subMenu: [
        {label: "Amazon Connect"},
        {label: "Pinpoint"},
        {label: "Simple Email Service"}
      ]
    },
    {
      label: "Business Applications",
      link: "#",
      icon: ["fal", "briefcase"],
      subMenu: [
        {label: "Alexa for Business"},
        {label: "Amazon Chime"},
        {label: "WorkMail"}
      ]
    },
    {
      label: "End User Computing",
      link: "#",
      icon: ["fal", "user-friends"],
      subMenu: [
        {label: "WorkSpaces"},
        {label: "AppStream 2.0"},
        {label: "WorDocs"},
        {label: "WorkLink"}
      ]
    },
    {
      label: "Internet of Things",
      link: "#",
      icon: ["fal", "browser"],
      subMenu: [
        {label: "IoT Core"},
        {label: "Amazon FreeRTOS"},
        {label: "IoT 1-Click"},
        {label: "IoT Analytics"},
        {label: "IoT Device Defender"},
        {label: "IoT Device Management"},
        {label: "IoT Events"},
        {label: "IoT Greengrass"},
        {label: "IoT SiteWise"},
        {label: "IoT Things Graph"},
      ]
    },
    {
      label: "Game Development",
      link: "#",
      icon: ["fal", "comments-alt"],
      subMenu: [
        {label: "Amazon GameLift"},
      ]
    }
  ]
];

export default allServicesData;