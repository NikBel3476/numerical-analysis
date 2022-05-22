const EPS: f64 = 10e-4;
const A: f64 = 0.0;
const B: f64 = 1.0;

fn main() {
	println!("Lab 3, variant 1");

	let mut iterations_amount = 500;
	let mut sum: f64 = 0.0;
	loop {
		let prev_sum = sum;
		sum = 0.0;
		iterations_amount *= 2;
		let delta: f64 = (B - A) / iterations_amount as f64;
		let mut x: f64 = A;

		for _i in 0..iterations_amount {
			sum += integral_func(x) * delta;
			x += delta;
		}

		if (sum - prev_sum).abs() < EPS {
			break;
		}
	};

	println!("Result: Im = {}", sum);

	let mut s = String::new();
	std::io::stdin().read_line(&mut s).expect("");
}

fn integral_func(x: f64) -> f64 {
	1.0 / (1.0 + 10.0 * x)
}
