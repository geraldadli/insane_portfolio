const repo = "https://github.com/geraldadli/research-portfolio/tree/main";

// Source: GeraldAdli_CV.pdf. Metrics describe the reported research evaluation.
// Artwork is an original schematic, not a clinical scan or a product screenshot.
export const projects = [
  {
    id: "brain-mri",
    number: "01",
    category: "Medical imaging",
    year: "2025",
    title: "Classifying\nbrain MRI scans.",
    name: "Brain tumour MRI classification",
    description:
      "Classifies four types of brain MRI scans and uses SHAP to help explain predictions.",
    tags: ["PyTorch", "Vision Transformer", "Bidirectional GRU"],
    metric: "92.6%",
    metricLabel: "held-out accuracy",
    context: "1,311 scans · 0.93 weighted F1",
    role: "First author",
    href: `${repo}/01-brain-tumor-vit-gru`,
    visual: "brain",
    pipeline: ["MRI", "ViT-B/16", "BiGRU", "4 classes"],
    chapters: [
      {
        label: "The question",
        title: "Classify four scan types.",
        body: "This study classifies MRI scans as glioma, meningioma, pituitary, or no tumour.",
        visualLabel: "Observe the input",
      },
      {
        label: "The approach",
        title: "Train and explain the model.",
        body: "A Vision Transformer and bidirectional GRU form the hybrid architecture. I owned the full pipeline, from preprocessing and training to SHAP attributions and t-SNE feature projections.",
        visualLabel: "Explore the features",
      },
      {
        label: "The evidence",
        title: "Test on held-out scans.",
        body: "Evaluation on 1,311 held-out scans produced the results below. The code, evaluation figures, and implementation limitations are documented alongside the research.",
        visualLabel: "Evaluate the model",
      },
    ],
    details:
      "I owned preprocessing, training, evaluation, and interpretation using SHAP and t-SNE. The repository includes evaluation figures, dataset provenance, and implementation limitations. This is research work; the reported metrics are from a held-out evaluation.",
  },
  {
    id: "crop-rl",
    number: "02",
    category: "Precision agriculture",
    year: "2026",
    title: "Finding crops\nin images.",
    name: "RL-guided active crop localization",
    description:
      "A reinforcement learning agent adjusts detection boxes to locate crops in images.",
    tags: ["YOLOv12", "Deep Q-Network", "Streamlit"],
    metric: "0.969",
    metricLabel: "mean intersection over union",
    context: "0.09 s / sample · reported evaluation",
    role: "Co-author · Elsevier, 2026",
    href: `${repo}/03-crop-localization-rl`,
    visual: "crop",
    pipeline: ["YOLOv12", "DQN", "IoU reward"],
    chapters: [
      {
        label: "The question",
        title: "Locate crops in an image.",
        body: "This study tests whether a series of box adjustments can improve crop detection.",
        visualLabel: "Observe the scene",
      },
      {
        label: "The approach",
        title: "Adjust the detection boxes.",
        body: "A deep Q-network agent refines CNN detector boxes against an intersection-over-union reward. A Streamlit dashboard shows each decision.",
        visualLabel: "Refine the region",
      },
      {
        label: "The evidence",
        title: "Measure the results.",
        body: "The reported evaluation achieved a mean intersection over union of 0.969 at 0.09 seconds per sample. Explore the study to understand the evaluation setup and its limitations.",
        visualLabel: "Measure the overlap",
      },
    ],
    details:
      "Co-authored research combining CNN detectors with a reinforcement learning agent and an interactive decision dashboard. The agent refines detector boxes against an intersection-over-union reward. Explore the repository for the paper, evaluation setup, and limitations.",
  },
];
export const otherResearch = [
  {
    number: "03",
    title: "Improving wireless networks.",
    name: "RIS-aided 5G MISO networks",
    description:
      "Uses reinforcement learning to improve wireless networks. Published in Discover Applied Sciences in 2026.",
    category: "Deep reinforcement learning",
    year: "2026",
    href: `${repo}/04-ris-miso-5g-drl`,
  },
  {
    number: "04",
    title: "Classifying EEG signals.",
    name: "Cognitive skills & EEG classification",
    description:
      "Studies cognitive skills by classifying EEG signals, with OpenBCI validation. Published in Brain Organoid and Systems Neuroscience Journal in 2025.",
    category: "Affective computing",
    year: "2025",
    href: "https://scholar.google.com/citations?user=o5RjtT0AAAAJ&hl=en",
  },
];
