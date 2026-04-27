---
source_url: https://arxiv.org/abs/2604.15245v1
ingested: 2026-04-27
sha256: 550b38530fcb5c3c7096b8238585ce48d6e20f3e7b8bbeaa0754c000864eb1a8
---
# Goxpyriment: A Go Framework for Behavioral and Cognitive Experiments

Query cluster: sleep-circadian
ArXiv ID: 2604.15245v1
Published: 2026-04-16
Updated: 2026-04-16
Authors: Christophe Pallier, Julie Bonnaire, Marie-France Fourcade
Categories: q-bio.NC
Abstract: We introduce `Goxpyriment', a new open-source software framework for programming behavioral and cognitive experiments using the Go programming language. The library is designed to address some limitations of existing Python-based experiment tools, particularly the runtime environment complexity that frequently complicates deployment across laboratories. Because Go is a compiled language that can natively embed assets (e.g., graphics, audio files, and stimulus lists), Goxpyriment compiles entire experiments into single, self-contained executable binaries with zero runtime dependencies. This drastically simplifies distribution to collaborators and testing computers. The programming interface, inspired by Expyriment (Krause & Lindemann, 2014), was designed to be human friendly. The library includes an array of visual stimuli (text, shapes, images, Gabor patches, motion clouds, ...) and audio capabilities (WAV playback and tone generation). While developing Goxpyriment, we focused on timing reliability. Input events are timestamped by the operating system at hardware-interrupt time, so reaction times are computed by subtracting two OS-level timestamps rather than relying on continuous polling. Go's garbage collector can be disabled, greatly reducing the probability of unpredictable pauses that could corrupt stimulus timing. Finally, a set of over forty psychology experiments implemented in Goxpyriment are provided that promote not only learning by humans but also improve the ability of modern AI-assisted coding tools to help program experiments. The framework is released under the GNU General Public License v3 and is freely available at https://github.com/chrplr/goxpyriment.

Source: https://arxiv.org/abs/2604.15245v1
